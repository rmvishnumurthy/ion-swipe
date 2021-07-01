# Ionic 5 - IonSwipe

This library is an ionic 5 gesture library for swipe up & swipe down operations. This library is compitable with [Ionic 5](https://ionicframework.com/#) version 5.6.10 and [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5. Click here for [Live Demo](https://stackblitz.com/edit/ionic-swipe-example).

## Installation

```sh
$ npm install ion-swipe@latest --save
```

# API

## Inputs

| Input | Description |
| ------ | ------ |
| collapsedHeight | Minimum height of swipe drawer to be visible for user to swipe up the screen |
| expandedHeight | Height of swipe drawer to be visible for user when the screen swiped up|
| toolbarHeight | Height of toolbar upto which swipe drawer must  be visible when the screen swiped up|
| expanded | Initial state of swipe drawer|
| enableSwipe | Enable or disable swipe operations by screen swipe|

## Outputs

| Output | Description |
| ------ | ------ |
| swipeStateChanged | Event triggered whenever the swipe drawer state changes from open to close & vice-versa |
| swipeUp | Event triggered whenever the swipe drawer state changes from close to open & combined with down also to have more control |
| swipeDown | Event triggered whenever the swipe drawer state changes from open to close & combined with open also to have more control |

## Steps to use in application

1. Import IonSwipeModule into the required application module.
    ```ts
    import { IonSwipeModule } from 'ion-swipe';
    
    @NgModule({
      declarations: [AppComponent],
      entryComponents: [],
      imports: [IonSwipeModule],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    ```
2. Use ngx-ion-swipe selector to add ion swipe drawer in the componet.
    ```ts
    <ngx-ion-swipe [expanded]="true" [toolbarHeight]="150">
    <!-- Content to be displayed within drawer goes here -->
      <ion-item>
        <ion-label>test 1</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>test 2</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>test 3</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>test 4</ion-label>
      </ion-item>
    </ngx-ion-swipe>
    ```

## Further help

To get more help on this library contact me over [mail](vishnu.fullstack.developer@gmail.com).

## Contribution

1. Fork the git repo [ion-swipe](https://gitlab.com/vishnu-fullstack-developer/ion-swipe).
2. Apply your changes in this fork.
3. Test for working of new functionality.
4. Commit your changes to this fork.
5. Raise the pull request to merge your changes with master.