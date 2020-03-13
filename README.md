<!--Angular 7:  -->
Angular 7 is an open source JavaScript framework for building web applications and apps in JavaScript, html, and Typescript which is a superset of JavaScript. Angular provides built-in features for animation, http service, and materials which in turn have features such as auto-complete, navigation, toolbar, menus, etc. The code is written in Typescript, which compiles to JavaScript and displays the same in the browser.

<!-- Angular Update's to Version7 -->
Angular 7 is a major release where in the angular core framework, Angular CLI, Angular Materials are updated.
#Updates in 7
>angularCLI
it prompts asking about the built-in features available, i.e.,is routing required and type of stylesheet...

>Application Performance
in angular.json 'Budgets' is a feature added to Angular CLI which allows you to set limit it warns when the limit is crossed.

>Angular Material and CDK updated to 7
2 features added to CDK(Component Dev Kit (CDK) is a set of tool) − virtual scrolling, and drag and drop.

>Virtual Scrolling
shows up the visible dom elements to the user, as the user scrolls, the next list is displayed full list is not loaded at one go and only loaded as per the visibility on the screen.
1.npm i --save @angular/cdk @angular/material @angular/animations
2.add styles "@import ‘@angular/material/prebuilt-themes/deeppurple-amber.css’;"
3.import  @angular/cdk/scrolling in app or in needed module
4. define a container where scrolling has to be accessiable
3 place it in html with tag <cdk-virtual-scroll-viewport></cdk-virtual-scroll-viewport>

eg:
<cdk-virtual-scroll-viewport class="viewport" itemSize="20">
   <div *cdkVirtualFor="let size of fixedSizeData; let i = index" 
        class="list-group-item" 
        [style.height.px]="size" templateCacheSize: 0>
      Item {{i}}
    </div>
</cdk-virtual-scroll-viewport>

<!-- its in beta version: 'Autosize' attribute indicates we want to use a virtual scroll strategy that supports unknown or dynamic size items -->

#fixed item size [itemSize]="20"
#templateCacheSize caches previously created views after they are no longer needed. When a new view would normally be created, a cached view is reused instead.
4. add styles for the container and viewport classes


>Drag and Drop
You can drag and drop elements from a list and place it wherever required within the list.

drag-and-drop functionality to be attached to DOM elements.

1.import {DragDropModule} from '@angular/cdk/drag-drop'; in module 
2.//basic example
<div class="example-box" cdkDrag>
  Drag me around
</div>
3. define styles for example-box


<!-- Components -->
Components are basically classes that interact with the .html file of the component, which gets displayed on the browser.
ng g component new-cmp

import { Component, OnInit } from '@angular/core'; // here angular/core is imported.

@Component({ 
   // this is a declarator which starts with @ sign. 
   // The component word marked in bold needs to be the same. 
   selector: 'app-new-cmp', // selector to be used inside .html file. 
   templateUrl: './new-cmp.component.html', 
   // reference to the html file created in the new component. 
   styleUrls: ['./new-cmp.component.css'] // reference to the style file. 
}) 
export class NewCmpComponent implements OnInit {   
   constructor() { } 
   ngOnInit() { } 
}

<!-- Flow -->
index.html->(<app-root></app-root>)app-component.ts-> (appcomponent.html)->main.ts->app_module->routes->child-components...

<!-- Modules -->

Module in Angular refers to a place where you can group the components, directives, pipes, and services, which are related to the application.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
   declarations: [
      AppComponent,
      NewCmpComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

<!-- Lazy-loading feature modules -->

A design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

There are two main steps to setting up a lazy-loaded feature module:
1.Create the feature module with the CLI, using the --route flag.
2.Configure the routes.

Rules
1.Move components and assets into their own module
2.DO NOT load the module in the main AppModule
3.Lazy loading will be setup in the main routing file

# create the app
ng new lazyload-app --routing

# create the home component
ng g component home

# create the dashboard module
ng g module dashboard --routing

# create the dashboard home page
ng g component dashboard/dashboard-home

# At main router  we have to point the dashboardModule 

// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
#note: forRoot

#Any routes defined in dashboard module will be lazy loaded!

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
# Note:forChild(routes)

!use router link to access in html
eg: <!-- <a routerLink="/dashboard">Dashboard</a> -->

on loading 'dashboard' link in networks of dev kit we will find chunk.js which means lazyloading success!


#RouterModule.forRoot(routes): used only once, root routing module,it take cares of global injector configuration for the Router
# RouterModule.forChild(routes):  it is used for feature routing modules,It uses directives such as RouterOutlet and RouterLink to implement injectors.

<!-- Routing -->

navigating between pages(components).this  comes by default during project setup.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];//holds all routes need for project
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)//
   ],
   exports: [RouterModule] 
}) 
export class AppRoutingModule { }

#<router-outlet> directive implements where we want the view to be displayed.
<!-- Databinding -->
data binding - {{}} interpolation, The two curly brackets help with data binding.
two way binging is done by [()]
 here we have *ngIf directive 
if-then-else using template
<div style = "text-align:center"> 
   <h1> Welcome to {{title}}. </h1> 
</div>

<div> Months : 
   <select> 
      <option *ngFor="let i of months">{{i}}</option>
   </select> 
</div> 
<br/>

<div> 
   <span *ngIf = "isavailable; then condition1 else condition2">
      Condition is valid.
   </span> 
   <ng-template #condition1>Condition is valid</ng-template> 
   <ng-template #condition2>Condition is invalid</ng-template> 
</div>

<!-- Event Binding -()-->
When a user interacts with an application in the form of a keyboard movement, a mouse click, or a mouse over, it generates an event and whenwe need to perform some kind of action then Event Binding comes into picture.
ex: (click),(change)...

<!--Templates -->
there is a name conflict between the <template> tag in angular and the html <template> standard tag thats the reason it got changed to <ng-template>.
it holds its content hidden from the client made visible and rendered later by using JavaScript.

<!-- Directives -->
Components
Directive
For register component we use @Component meta-data annotation.
For register directives we use @Directive meta-data annotation.

Component is a directive which use shadow DOM to create encapsulate visual behavior called components.  Components are typically used to create UI widgets.

Directives is used to add behavior to an existing DOM element.


Component is used to break up the application into smaller components.

Directive is use to design re-usable components.
Only one component can be present per DOM element.

Many directive can be used in a per DOM element.
@View decorator or templateurl template are mandatory in the component.

Directive don’t have View.
Component is used to define pipes.

You can’t define Pipes in directive.
viewEncapsulation can be define in components because they have views.
Directive don’t have views. So you can’t use viewEncapsulation in directive.

<button myDirective>Click here</button>
#Component Directives
its a directive with a template(html)
These form the main class having details of how the component should be processed, instantiated and used at runtime.

#Structural Directives
A structure directive basically deals with manipulating the dom elements. Structural directives have a * sign before the directive. 
For example, *ngIf and *ngFor.

#Attribute Directives
Attribute directives deal with changing the look and behavior of the dom element. You can create your own directives as explained in the below section.
# Respond to user-initiated events
directive can be more dynamic like mouse moves, setting/clearing highlight colour all this can be done by HostListerns!!

#ex of Custom Directives
ng g directive < nameofthedirective >
<!-- only a spec and a ts will be generated and will be added in app module -->
# changeText directive can be used in html like follows
<span changeText >Welcome to {{title}}.</span> 


<!--pipes  -->
Pipes were earlier called filters in Angular1.
ex: {{ Welcome to Angular 7 | lowercase}}
#built-in pipes:
Lowercasepipe
Uppercasepipe
Datepipe
Currencypipe
Jsonpipe
Percentpipe
Decimalpipe
Slicepipe
#custom pipes
 1. create a ts file and import Pipe and Pipe Transform 
 2. import this pipe in app module to use in components
 3. use in component html using '|<pipe name>'

<!-- services -->
when we need some code to be used everywhere on the page, for example, it can be for data connection that needs to be shared across components.

1. ng g service myservice
2. import in app module,providers
3. import in the component where needed and add to the constructor to use its instance.

<!-- Http Client -->
to fetch, update, add data from/to server we use http client.
1. import { HttpClientModule } from '@angular/common/http in all module
2. import { HttpClient } from '@angular/common/http'; in usimg service 
3. define a url to call
4. add functions r properties to use server data
5. use this data in componets or directives or any where needed.

<!-- Forms  -->

1. Template driven form (work on template forms)
2. Model driven form (work on component class)

#Template driven form
1. (formModule) import this in appModule or any needed module.
2. 'ngForm' is a directive needs to be added, 
we need to create the 'model form controls' by adding the 'ngModel' directive and the 'name' attribute.
3. for a Form tag we assign an id to ngForm .. the id vll contain value of the model of input form which gets from input attributes name and ngModel

#Model driven form
1. import the ReactiveFormsModule from @angular/forms in appmodule of needed module
2. import { FormGroup, FormControl } from '@angular/forms'; in needed component
3. create a 'FormGroup' in ngoninit() function add form field and validations needed 
ex:
  ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {"passwd" : true};
      }
   }
   we can also add validations on buttons.
4. add [formGroup] = "<name of the form>"  in html
5. we can disable validation too [disabled] = "!formdata.valid"

<!-- Materials -->
1. npm install --save @angular/material
2. import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material'; inn appmodule
3. in styles.css import @import "~@angular/material/prebuilt-themes/indigo-pink.css";
4. add mat related tags in html 
ex: <mat-menu></mat-menu>
<mat-sidenav-container></mat-sidenav-container>. <mat-sidenav></mat-sidenav> 
#for mat date picker
<mat-form-field>
   <input matInput [matDatepicker] = "picker" placeholder = "Choose a date"> 
   <mat-datepicker-toggle matSuffix [for] = "picker"></mat-datepicker-toggle>
   <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

<!-- @input,@output properties-->
it share data between parent-child components/directives. input: is writable and output: is observable.
#@input()
1. this is placed in child component by importing import { Component, Input } from '@angular/core' and a datatype variable added to it and can be used in child comp
2. To watch for changes on an @Input() property,  OnChanges is used
ex:
#<child component>
import { Component, Input } from '@angular/core'

@Input() item: string;

ngOnChanges(changes: SimpleChanges) {
  this.iteam = changes["item"].currentValue;
}
}

#parent component
at Component initialize value for 'item'
at html bind value to child component 
<child-comp [item]="item"/>

#@output()
#<child component>
<!-- child.ts -->
import { Component, output } from '@angular/core'
 
 @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
<!-- child.html -->
<button (click)="addNewItem('bla')">

#parent component
<!-- parent.ts -->
parentEmi(data){
  console.log(data)
}
<!-- parent.html -->
<child-comp (newItemEvent)="parentEmi($event)">

<!-- Observables in Angular -->



<!--unit testing Jasmine, Karma -->
if a small piece of code is updated and the developer manually opens their browser or Postman to verify that it still works. This approach (manual QA) is begging for a disaster.
#Benefits of Unit Testing:
1.Improve the design of implementations by making user think and re-think the desig.
2.Allows refactoring, we can easily add changes to that code with the certainty that you are not adding any bugs which were already tested and were working.
3.Add new features without breaking anything
4.Tests are the best way to prevent software defects.
5.Test are for verifing that it behaves as we expect and helps for better documentation.

jasmine-core. Jasmine is the framework
karma. Karma is a task runner .

#Y karma
UI includes option to test your code on various browsers and devices such as phones, tablets, and even a PS3 like the YouTube
can replace replace Jasmine  with s Mocha and QUni..
#Y jasmine
Jasmine is a behavior-driven development framework for testing JavaScript code that plays very well with Karma. Similar to Karma, it’s also the recommended testin

#good news is that the switching costs between testing frameworks is relatively low with 'differences in syntax' as small as Jasmine's toEqual() and Mocha's to.equal().

http://www.bradoncode.com/blog/2015/05/12/angularjs-testing-getting-started/


<!-- HostListerns -->
It tells a dom event to listen for and provides a handler method to run when event occurs.
ex:
HostListener in directive..
@Directive({selector: 'button[counting]'})
class CountClicks {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }
}
directive used in component
@Component({
  selector: 'app',
  template: '<button counting>Increment</button>',
})
class App {}

<!-- viewencapsulate -->
<!-- childview -->
<!-- AOT -->
<!-- Internationalization (i18n) -->

<!-- The safe navigation operator ( ? )  -->
<p>The item name is: {{item?.name}}</p>
If item is null, the view still renders but the displayed value is blank; you see only "The item name is:" with nothing after it.

<!-- The non-null assertion operator ( ! ) -->
 strict null checking 
 <p *ngIf="item">The item's color is: {{item!.color}}</p>
Typed variables disallow null and undefined by default.The type checker throws an error if you leave a variable unassigned or try to assign null or undefined to a variable whose type disallows null and undefined.

<!-- The $any() type cast function -->
Sometimes a binding expression triggers a type error during AOT compilation and it is not possible or difficult to fully specify the type. To silence the error, you can use the $any() cast function to cast the expression to the any type as in the following example: