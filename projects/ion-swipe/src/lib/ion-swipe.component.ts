import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';
import { SwipeDrawerState } from './swipe-state';

@Component({
  selector: 'ngx-ion-swipe',
  templateUrl: 'ion-swipe.component.html',
  styleUrls: ['ion-swipe.component.scss']
})
export class IonSwipeComponent implements OnInit {

  swipeElement: HTMLElement;

  @Input()
  collapsedHeight: number | string = '40px';

  @Input()
  expandedHeight: number | string = '100vh';

  @Input()
  toolbarHeight: number = 150;

  @Input()
  expanded: boolean = false;

  @Input()
  enableSwipe: boolean = true;

  @Output('swipeStateChanged')
  drawerState: EventEmitter<SwipeDrawerState> = new EventEmitter();

  @Output('swipeUp')
  swipeUp: EventEmitter<boolean> = new EventEmitter();

  @Output('swipeDown')
  swipeDown: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('swipeDrawer', { read: ElementRef })
  swipeDrawer: ElementRef;

  constructor(private platform: Platform, private gestureCtrl: GestureController, public cdRef: ChangeDetectorRef) { }

  ngOnInit() { }

  async ngAfterViewInit() {
    this.swipeElement = this.swipeDrawer.nativeElement;
    if (this.toolbarHeight) {
      this.expandedHeight = this.platform.height() - this.toolbarHeight;
    }

    if (!this.expandedHeight) {
      this.expandedHeight = this.platform.height();
    }

    let gesture = this.gestureCtrl.create({
      el: this.swipeElement,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        console.log(`delta  ${ev.deltaY}, ${this.expandedHeight}`)
        if (ev.deltaY < -this.expandedHeight)
          return;

        if (this.expanded && ev.deltaY > 0)
          this.swipeElement.style.transform = `translateY(${ev.deltaY}px)`;

        if (this.expanded)
          return;

        this.swipeElement.style.transform = `translateY(${ev.deltaY}px)`;
        //this.swipeElement.style.height = `50vh`;
      },
      onEnd: ev => {
        if (ev.deltaY < -40 && !this.expanded) {
          this.swipeElement.style.transform = ``;
          //this.swipeElement.style.transform = `translateY(${-this.expandedHeight}px)`;
          this.swipeElement.style.height = `${this.expandedHeight}px`;
          this.swipeElement.style.boxShadow = `rgb(0 0 0 / 12%) 0px 0px 4px`;
          this.drawerState.emit(SwipeDrawerState.OPENED);
          this.swipeUp.emit(true);
          this.swipeDown.emit(false);
          this.expanded = true;
        } else if (ev.deltaY > 40 && this.expanded) {
          this.swipeElement.style.transform = ``;
          this.swipeElement.style.height = `${this.collapsedHeight}`;
          this.swipeElement.style.boxShadow = '';
          this.drawerState.emit(SwipeDrawerState.CLOSED);
          this.swipeUp.emit(false);
          this.swipeDown.emit(true);
          this.expanded = false;
        }
        this.cdRef.detectChanges();
      }
    });

    if (this.enableSwipe) {
      gesture.enable();
    } else {
      gesture.destroy();
    }

  }

  toggle() {
    if (this.expanded) {
      //this.swipeElement.style.transform = `translateY(${this.collapsedHeight}px)`;
      this.swipeElement.style.transform = ``;
      this.swipeElement.style.height = `${this.collapsedHeight}`;
      this.swipeElement.style.boxShadow = '';
      this.expanded = false;
      this.swipeDown.emit(true);
    } else {
      //this.swipeElement.style.transform = `translateY(${-this.expandedHeight}px)`;
      this.swipeElement.style.height = `${this.expandedHeight}px`;
      this.swipeElement.style.boxShadow = `rgb(0 0 0 / 12%) 0px 0px 4px`;
      this.expanded = true;
      this.swipeUp.emit(true);
    }
    this.drawerState.emit(this.expanded ? SwipeDrawerState.OPENED : SwipeDrawerState.CLOSED);
  }

}
