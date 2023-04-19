"use strict";
/*Работа с типами */
// let revenue:number = 1000;
// let bonus:number = 500;
// let c:string = 'sada';
// let d:boolean = true;
// let res:number = revenue + bonus;
// console.log(res);
// function getFullName (firstName:string, surName:string):string{
//     if(typeof firstName !=='string'){
//         throw new Error('!!!!!!');
//     }
//     return `${firstName} ${surName}`;
// }
// const getFullNameArrow = (firstName:string, surName: string):string =>{
//     return `${firstName} ${surName}`;
// }
// console.log(getFullName ('true','false'));
// function getFullNameObj (userEntity:{ firstName:string,surName:string }):string{
//     return `${userEntity.firstName} ${userEntity.surName}`;
// }
// const user = {
//     firstName:'email',
//     surName:'user',
//     city:'Moscow',
//     age:33,
//     skills:{
//         dev:true,
//         devops:true
//     }
// };
// console.log(getFullNameObj(user));
/*Упражнение типизации объекта */
// let info:{
//     officeId: number;
//     isOpened: boolean;
//     contacts: {
//         phone: string;
//         email: string;
//         adress: {
//             city:string;
//         }
//     }
// } = {
//     "officeId": 45,
//     "isOpened": false,
//     "contacts": {
//         "phone": "+7901232131",
//         "email": "asdsad@mail.ru",
//         "adress": {
//             "city":"Moscow"
//         }
//     }
// }
/*Массивы */
// const skills:string[] = ['Dev','DevOps','Test'];
// for (const skill of skills){
//     console.log(skill.toLocaleLowerCase());
// }
// console.log(skills
//     .filter((s:string)=> s!=='DevOps')
//     .map((s:string)=>s+'! ')
//     .reduce((a,b)=>a + b));
/*Tuples */
//Больше элементов не добавить никак так как четко структуризовали массив 
// const skills:[number,string] = [1,'Dev'];
// const [id,skillName] = skills;
// //Теперь все валидно
// const arr:[number,string, ...boolean[]] = [1,'Dev',true,true,false];
/*Readonly */
// //Картеж для чтения , значит нельзя модифицировать 
// const skills: readonly [number,string] = [1,'Dev'];
// //Также как сверху только через джинерик
// const skill: ReadonlyArray<string> = ['Dev','DevOps']
// //Нельзя
// skills[0]= 5; 
/*Enums */
// enum StatusCode{
//     SUCCESS = 1,
//     IN_PROCESS = 'P',
//     FAILED = 'f'
// }
// const res = {
//     message: 'Success',
//     statusCode: StatusCode.SUCCESS
// }
//1 - успех
//'P' - в процессе
//'f' - отколнен
// if(res.statusCode === StatusCode.SUCCESS){
// }
// function action(status:StatusCode){
// }
// action(StatusCode.SUCCESS);
// action(1);
// //Цифры ок а вот значения не ок 
// action('p');
// const enum Roles { 
//     ADMIN = 1,
//     USER = 2
// }
// const res2 = 1; 
/*Упражнение Типизируем функцию */
// enum Status {
//     published = 'published',
//     draft = 'draft',
//     deleted = 'deleted'
// }
// async function getFaqs(req:{topicId:number, status?:Status}):Promise<{
//     question:string;
//     answer:string;
//     tags:string[];
//     likes:number;
//     status:Status;
// }[]>{
//     const res = await fetch('/faqs',{
//         method:'POST',
//         body: JSON.stringify(req)
//     });
//     const data = await res.json();
//     return data;
// }
/*Продвинутые типы в TS */
/*Union */
// const arr = ['asd',1];
//Union
// function logId(id: string | number | boolean){
//     //Сужение типов 
//     if(typeof id === "string"){
//         console.log(id.toLowerCase());
//     }else if(typeof id === "number"){
//         console.log(id);
//     //Тут оставшийся булиан 
//     }else{
//         console.log(id);
//     }
// }
// function logError(err:string| string[]){
//     if(Array.isArray(err)){
//         console.log(err);
//     }else{
//         console.log(err);
//     }
// }
// function logObject(obj:{ a:number}| {b:number}){
//     if('a' in obj){
//         console.log(obj.a);
//     }else{
//         console.log(obj.b);
//     }
// }
// function logMultipleIds(a: string| number, b:string | boolean){
//     if(a===b){
//     }else{
//         console.log(a);
//     }
// }
/*Literal types */
// enum RequestType{
//     GET = 'get',
//     POST = 'post'
// }
// function fetchWithAuth(url: string,method: 'post'| 'get'){
// }
// let method = 'post';
// fetchWithAuth('s',method as 'post');
/*Type ALIAS */
// type httpMethod = 'post' | 'get'
// type coolString = string;
// type User = {
//     name:string,
//     age:number,
//     skills:string[]
// };
// type Role = {
//     name: string;
//     id:number;
// }
// type UserWithRole = User | Role;
// let user:UserWithRole = {
//     name:'sad',
//     age: 33,
//     skills:['1','2'],
//     id:1
// }
// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//     return 1;
// }
// let method = 'post';
// fetchWithAuth('s',method as 'post');
/*Interface */
// //Interface имеет преимущество в том что его можно дополнять таким же интерфейсом
// interface User {
//     name:string,
//     age:number,
//     skills:string[]
//     log:(id:number) =>string;
// };
// interface Role {
//     roleId: number
// }
// type User2 = {
//     name:string,
//     age:number,
//     skills:string[]
//     log:(id:number) =>string;
// };
// //Можно совмещать свойства интерфейсов с помощью extends
// interface UserWithRole extends User,Role {
//     createdAt: Date
// }
// let user:UserWithRole = {
//     name:'sad',
//     age: 33,
//     skills:['1','2'],
//     roleId:1,
//     createdAt:new Date(),
//     log(id) {
//         return '';
//     },
// }
// interface UserDic {
//     //Неограниченное число свойств которые слева будут числом а справа user
//     [index: number]:User
// }
// type ud = Record<number,User>;
// interface User {
//     name:string
// }
// interface User {
//     age:number
// }
// const user:User = {
//     name:'as',
//     age:33
// }
// //interface работает только с объектами а type может работать и с простыми объектами
// type Id = string | number;
// interface IDI {
//     ID:string | number;
// }
// interface User2{
//     login: string;
//     //Опциональное свойство можно вводить можно и не вводить
//     password?: string;
// }
// const user2:User2 = {
//     login: 'sad@mail.ru',
//     password: '1'
// }
// //Тут знак вопроса не подойдет тут нужно number | undefined или можно сунуть ? только проверкой нужно
// function multiply(first: number, second?: number): number{
//     if(!second){
//         return first * first;
//     }
//     return first * second;
// }
// interface UserPro {
//     login: string;
//     password?: {
//         type: 'primary' | 'secondary'
//     };
// }
// function testPass (user: UserPro){
//     const t = user.password?.type;
//     //const t = user.password!.type; !-означает что passrwod будет 100 процентов 
// }
// function test(param?: string){
//     //Если param 0 или undefind то вызвать функцию multiply(5);
//     const t = param ?? multiply(5);
// }
/*Упражнение Типизируем ответ сервера */
//1 вариант решения
// interface Zapros { 
//     sum: number;
//     from: string;
//     to: string;
// }
// enum DataCode{
//     Success = 'success',
//     Failed = 'failed' 
// }
// interface Otvet { 
//     status: DataCode;
//     data: Success | Failed;
// }
// interface Success extends Zapros{
//     databaseId: number;
// }
// interface Failed{
//     errorMessage: string;
//     errorCode: number;
// }
//2 вариант решения 
// interface Zapros { 
//     sum: number;
//     from: string;
//     to: string;
// }
// enum DataCode{
//     Success = 'success',
//     Failed = 'failed' 
// }
// interface OtvetSuccess { 
//     status: DataCode.Success;
//     data: Success ;
// }
// interface OtvetFailed { 
//     status: DataCode.Failed;
//     data: Failed ;
// }
// interface Success extends Zapros{
//     databaseId: number;
// }
// interface Failed{
//     errorMessage: string;
//     errorCode: number;
// }
/*Void */
//void нужен для того чтобы вставить допусти куда то значение но ничего не выводить 
//void означает что функция ничего не возвращает 
// function logId(id: string | number): void {
//     console.log(id);
// }
// //a: void
// const a = logId(1);
// function multiply (f:number, s?:number): number | void {
//     if(!s){
//         return f * f; 
//     }
// }
// type voidFunction = () => void;
// const f1: voidFunction = () =>{
// } 
// //Вернуть можно что угодно но возврат будет игнорироваться 
// const f2: voidFunction = () =>{
//     return true;
// }
// const b = f2();
// const skills = ['Dev', 'DevOps'];
// const user = {
//     s: ['s']
// }
// skills.forEach((skill)=>user.s.push(skill));
/*Unknown */
//unknown нельзя положить в другую переменную или передать куда то в отличии от any 
// let input: unknown;
// input = 3;
// input = ['sd', 'asd']; 
// function run(i:unknown) {
//     if(typeof i == 'number'){
//         i++;
//     }else {
//         i
//     }
// }
// run(input);
// async function getData() {
//     try {
//         fetch('')
//     }catch(error){
//         if(error instanceof Error){
//             console.log(error.message);
//         }
//     }
// }
// async function getDataForce() {
//     try {
//         fetch('')
//     }catch(error){
//         const e = error as Error;
//     }
// }
// //Всегда unknown
// type U1 = unknown | null;
// //Всегда string так как внутри unknown есть string 
// type I1 = unknown & string;
/*Never */
// never никогда ничего не возвращает
// function generateError (message: string): never{
//     //throw генерирует исключение в виде переменной или строки
//     throw new Error(message);
// }
// function dumpError():never{
//     return dumpError();
// }
// //Как не возвращат так и ничего не вернет
// const a:never = undefined; 
// type paymentAction = 'refund' | 'checkout' | 'reject'
// function processAction(action:paymentAction){
//     switch (action){
//         case 'refund':
//             //...
//             break;
//         case 'checkout':
//             //...
//             break;
//         default:
//             // помогает при добавлении новых параметров и неизменении цикла 
//             const _: never = action;
//             throw new Error('Нет такого')
//     }
// }
// function isString(x:string | number): boolean{
//     if(typeof x === 'string'){
//         return true;
//     }else if (typeof x === 'number'){
//         return false;
//     }
//     generateError('asdasd');
// }
/*Null */
//Null нужен для того чтобы если данных нету то не выводил undefind а выводил пустое место тоесть null
// const n: null = null;
// const n1: any = null;
// const n2: string = null;
// const n3: number = null;
// const n4: boolean = null;
// const n5: undefined = null;
// interface User {
//     name:string;
// }
// function getUser(): User{
//     if(Math.random()>0.5){
//         return null;
//     }else{
//         return {
//             name: 'Вася'
//         } as User;
//     }
// }
// const user = getUser();
// if(user){
//     const n55 = user.name;
// }
/*Приведение типов */
// let a = 5;
// //Если хотим преобразовать число в строку то просто юзаем метод
// let b: string = a.toString();
// let c = 'sadas';
// //parseInt конвертирует строку в число 
// let d:number = parseInt(c);
// //e: String это интерфейс конструктора, а если хотим строку то надо написать valueOF
// let e = new String(a).valueOf();
// //Тоже самое с булевыми значением 
// let f = new Boolean(a).valueOf();
// interface User {
//     name:string;
//     email:string;
//     login:string;
// }
// //Указывается к какому типу преобразуется но не рекомендуется
// const user = <User> {
//     name: 'Вася',
//     email: 'vasiliy@mail.ru',
//     login:'Vasia'
// }
// interface Admin {
//     name: string;
//     role: number;
// }
// //admin добавляются ненужные свойства 
// const admin:Admin = {
//     ...user,
//     role: 1
// }
// //Тут все гуд
// function userToAdmin (user: User):Admin {
//     return {
//         name: user.name,
//         role: 1
//     }
// }
/*Type Guard */
// interface User {
//     name:string;
//     email:string;
//     login:string;
// }
// const user = <User> {
//     name: 'Вася',
//     email: 'vasiliy@mail.ru',
//     login:'Vasia'
// }
// interface Admin {
//     name: string;
//     role: number;
// }
// function logId(id: string | number){
//     if(isString(id)){
//         console.log(id);
//     } else {
//         console.log(id);
//     }
//     //Тип широкий (тоесть и строка и число) если есть проверка на оба типа
//     //id
// }
// //x является строкой тоесть вывод функции может быть только строка
// //Если он выведет строку то функция выдаст true иначе false 
// function isString(x:string | number): x is string {
//     return typeof x === 'string';
// }
// function isAdmin(user: User | Admin): user is Admin{
//     return 'role' in user;
// }
// function isAdminAlternative(user: User | Admin): user is Admin{
//     return (user as Admin).role !== undefined;
// }
// function setRoleZero(user: User | Admin){
//     if(isAdmin(user)){
//         user.role = 0;
//     }else{
//         throw new Error('Пользователь не админ');
//     }
// }
/*Упражнение: Типизируем ответ TypeGuard */
// interface IPayment{
//     sum: number;
//     from: number;
//     to: number;
// }
// enum PaymentStatus {
//     Success = 'success',
//     Failed = 'failed',
// }
// interface IPaymentRequest extends IPayment {}
// interface IDataSuccess extends IPayment {
//     databaseId: number;
// }
// interface IDataFailed {
//     errorMessage: string;
//     errorCode: string;
// }
// interface IResponseSuccess{
//     status: PaymentStatus.Success;
//     data:IDataSuccess;
// }
// interface IResponseFailed{
//     status: PaymentStatus.Failed;
//     data:IDataFailed;
// }
// type Res = IResponseSuccess | IResponseFailed;
// function _isSuccess(res: Res):res is IResponseSuccess{
//     if(res.status === PaymentStatus.Success){
//         return true;
//     }else{
//         return false;
//     }
// }
// function result(res: Res){
//     if(_isSuccess(res)){
//         return res.data.databaseId;
//     }else {
//         throw new Error(res.data.errorMessage);
//     }
// }
/*Asserts */
//Assert в случае если функция не выполняется то выдает ошибку 
// interface User {
//     name:string;
// }
// const a = { };
// assertUser(a);
// //Так как мы сравнили и проверили объект с присвоенным ему интерфейсом то мы теперь можем обращаться к свойству объекта User через a
// a.name = 'Vasya';
// /*if (x != null)
//     return true;
// else
//     return false;
// Эквивалентно
// return !!x;
// */
// function assertUser(obj:unknown):asserts obj is User{
//     //'name' in obj проверяет есть ли свойство name в объекте
//     if (typeof obj === 'object' && !!obj && 'name' in obj){
//         return ;
//     }
//     throw new Error('Не пользователь');
// }
/*Классы */
// class User{
//     name: string;
//     //constructor то где мы будем конструировать новые объекты или классы
//     constructor( name: string){
//         this.name = name;
//     }
// }
// //Создали user типа User
// const user = new User('Вася');
// console.log(user);
// user.name = 'Петя';
// console.log(user);
// class Admin {
//     role!:number;
// }
// const admin = new Admin();
// admin.role = 1;
/*Конструкторы классов пользователя */
// class User{
//     name!: string;
//     age!:number;
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name:string, age: number);
//     //constructor то где мы будем конструировать новые объекты или классы
//     constructor( ageOrName?: string | number,age?: number){
//         if(typeof ageOrName === 'string'){
//             this.name = ageOrName;
//         }else if(typeof ageOrName ==='number'){
//             this.age = ageOrName;
//         }
//         if(typeof age === 'number'){
//             this.age = age;
//         }
//     }
// }
// //Создали user типа User
// const user = new User('Вася');
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Vasya',33);
/*Методы */
// enum PaymentStatus{
//     Holded,
//     Processed,
//     Reversed
// }
// class Payment{
//     id:number;
//     status:PaymentStatus;
//     createdAt: Date;
//     updatedAt!: Date;
//     constructor(id:number){
//         this.id = id;
//         this.createdAt = new Date();
//         this.status = PaymentStatus.Holded;
//     }
//     getPaymentLifeTime():number{
//         return new Date().getTime() - this.createdAt.getTime();
//     }
//     unholdPayment(){
//         if(this.status === PaymentStatus.Processed){
//             throw new Error('Платеж не может быть возвращен');
//         }
//         this.status = PaymentStatus.Reversed;
//         this.updatedAt = new Date();
//     }
// }
// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);
/*Упражнение перегрузка конструктора */
// class User{
//     skills!: string[];
//     addSkill(skill:string):void;
//     addSkill(skills:string[]):void;
//     addSkill(skillsPushed: string | string[]):void{
//         if(typeof skillsPushed === 'string'){
//             this.skills.push(skillsPushed);
//         }else{
//             this.skills.concat(skillsPushed);
//         }
//     }
// }
// function run(distance:string):string;
// function run(distance:number):number;
// function run(distance:number | string):number | string{
//     if(typeof distance === 'number'){
//         return 1;
//     }else {
//         return '';
//     }
// }
// run();
/*Getter и Setter */
// class User{
//     _login!:string;
//     _password!:string;
//     createdAt: Date;
//     //Позволяет установить login свойство по умолчанию
//     set login(l:string | number){
//         this._login = 'user-' + l;
//         this.createdAt = new Date();
//     }
//     //Позваоляет вернуть что то по умолчанию при прямом обращении к user.login
//     get login(){
//         return this._login;
//     }
//     async getPassword(password:string){
//     }
//     set password(p:string){
//         //sync
//     }
// }
// const user = new User();
// // user.login = 'myLogin'
// console.log(user.login);
// console.log(user);
/*Implement */
// interface ILogger{
//     log(...args):void;
//     error(...args):void;
// }
// class Logger implements ILogger{
//     log(...args: any[]): void {
//         console.log(args);
//     }
//     error(...args: any[]): void {
//         //Кинуть во внешнюю систему
//         console.log(...args);
//     }
// }
// interface Payable {
//     pay(paymentID:number):void;
//     price?:number;
// }
// interface Deletable{
//     delete():void;
// }
// class User implements Payable , Deletable{
//     delete(): void {
//         throw new Error("Method not implemented.");
//     }
//     //Если убрать тип в классе то он будет any хоть он и имплиминтирован 
//     //Тип в классе всегда должен быть шире того типа который в интерфейсе
//     pay(paymentID: number|string): void {
//         throw new Error("Method not implemented.");
//     }
//     price?: number | undefined;
// }
/*Extends */
// type PaymentStatus = 'new' | 'paid';
// class Payment {
//     id:number;
//     status: PaymentStatus = 'new';
//     constructor(id:number){
//         this.id = id;
//     }
//     pay(){
//         this.status = 'paid';
//     }
// }
// class PersistendPayment extends Payment {
//     databaseId:number;
//     paidAt: Date;
//     constructor(){
//         const id = Math.random();
//         //SUPER означает что мы обращаемся к классу который мы наследуем к конструктору и начинаем его конструировать вместе с новым классом
//         super(id);
//     }
//     save(){
//         //Сохраняет в базу
//     }
//     //Мы можем переопределять уже существующий метод 
//     pay(date?:Date){
//         //Унаследовали строчку  this.status = 'paid'; из другого класса 
//         super.pay();
//         if(date){
//             this.paidAt = date;
//         }
//     }
//     //Означает что прошлый метод в другом классе с таким же названием стирается и переопределяется
//     // override pay(date?Date){
//     //     super.pay();
//     //     if(date){
//     //         this.paidAt = date;
//     //     }
//     // }
// }
// new PersistendPayment()
/*Дополнительные особенности extend */
// class User {
//     name: string = 'user';
//     constructor(){
//         console.log(this.name);
//     }
// }
// class Admin extends User{
//     //вывыедет user так как сначала отрабатывает user потом инициализируется свойство админа и его конструктор 
//     name: string = 'admin';
//     constructor(){
//         //super должен быть 1 всегда если идет обращение к переменным этого класса
//         super();
//         console.log(this.name);
//     }
// }
// new Admin();
// new Error('');
// class HttpError extends Error {
//     code:number;
//     constructor(message: string,code?:number){
//         super(message);
//         this.code = code ?? 500;
//     }
// }
/*Композиция */
// class User {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
// class Users extends Array<User>{
//     searchByName(name: string){
//         return this.filter(user => user.name === name);
//     }
//     override toString(): string {
//         return this.map(u=> u.name).join(', ');
//     }
// }
// const users = new Users();
// users.push(new User('Вася'));
// users.push(new User('Петя'));
// console.log(users.toString());
// class UserList {
//     users: User[];
//     push(u:User){
//         this.users.push(u);
//     }
// }
// class Payment {
//     date: Date;
// }
// class UserWithPayment extends Payment{
//     name:string;
// }
// class UserWithPayment2{
//     user:User;
//     payment:Payment;
//     constructor (user:User,payment:Payment){
//         this.user = user;
//         this.payment = payment;
//     }
// }
/*Видимость свойств */
// class Vehicle{
//     //Изначально элементы публичны и доступны для использования везде
//     public make: string;
//     //Теперь приватное свойство доступное для изменения только внутри класса 
//     private damages: string[];
//     private _model:string;
//     //Можем использовать внутри класса но нельзя извне Также доступно извне если класс наследуется 
//     protected run: number;
//     //Тоже самое что private
//     #price:number;
//     set model(model:string){
//         this._model = model;
//     }
//     get model(){
//         return this._model;
//     }
//     isPriceEqual(v:Vehicle){
//         this.#price === v.#price;
//     }
//     addDamage(damage:string){
//         this.damages.push(damage);
//     }
// }
// class EuroTruck extends Vehicle{
//     setRun(km:number){
//        this.run = km / 0.62; 
//     }
// }
// new Vehicle().make = 'd';
/*Упражнение - Корзина товаров */
// class Product{
//     constructor(
//         public id:number,
//         public price: number,
//         public name:string
//     ){}
// }
// class Point{
//     constructor(
//     public idMagazin: number,
//     public data: Date,){}
// }
// class Delivery {
//     constructor(
//     public toHome: string,
//     public toPoint:Point,)
//     {}
// }
// class Cart extends Delivery{
//     private cart: Product[] = [];
//     addToCart(product:Product):void{
//         this.cart.push(product);
//     }
//     deleteFromCart(id:number):void{
//         this.cart.map(item=>{if(item.id == id){
//             this.cart.splice(1)
//         }})
//     }
//     productInCart(){
//         let res = 0;
//         this.cart.map(item=>{
//             res += item.price;
//         })
//     }
//     changeDelivery(there:string, home:string,point:Point,dataToTake?:Date){
//         if(there == 'home'){
//             this.toHome = home;
//             let timeToCooking = 1000;
//             let date = Date() + timeToCooking;
//             return `${this.toHome} ко времени ${date}`
//         }else if(there == 'point'){
//             this.toPoint = point;
//             return `${this.toPoint} ко времени ${dataToTake}`;
//         }else{
//             return new Error('Вы ничего не выбрали');
//         }
//     }
//     checkout(){
//         if(this.cart.length > 0 && (this.toHome != null || this.toPoint != null)){
//             console.log('Все ок')
//         }
//     }
// }
/*Статические свойства */
// class UserService {
//     //статическую переменную можно присвоить типу приватный публик и тд
//     public static db: any;
//     //А вот тут асинхронные свойства можно использовать
//     static getUser(id:number){
//         return UserService.db.findById(id);
//     }
//     constructor(id:number){}
//     create(){
//         UserService.db;
//     }
//     //Как только объявляется класс то этот код сразу же выполняется
//     static {
//         //Тут нельзя использовать асин\
//         UserService.db = 'dsad';
//     }
// }
// //С помощью static мы можем обращаться к переменной напрямую без генерации new UserService тоесть не требует создания инстанца
// UserService.db;
// const inst = new UserService(1);
// //Теряем доступ к статичным свойствам класса
// inst.create();
/*Работа с this */
// class Payment {
//     private date:Date = new Date();
//     getDate(this: Payment){
//         return this.date;
//     }
//     getDateArrow = () =>{
//         return this.date;
//     }
// }
// const p = new Payment();
// const user = {
//     id:1,
//     //Можно пофиксить эту проблему через bind => p.getDate.bind(p)
//     paymentDate: p.getDate.bind(p),
//     //Так как в классе использовалась стрелочная функция то все ок становится
//     paymentDateArrow: p.getDateArrow
// }
// //Выведет undefined так как потерялся контекст
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());
// class PaymentPersisten extends Payment {
//     save(){
//         //Все ок выведет дату но если использовать стрелочную функцию, 
//         //то все сломается, но опять же если использовать не super, а this то все будет ок
//         return super.getDate();
//     }
// }
/*Типизация this */
// class UserBuilder {
//     name!: string;
//     //Тип который будет возвращать этот объект
//     setName(name: string): this{
//         this.name = name;
//         //Результатом будет UserBuilder
//         return this
//     }
//     //Сделали typeGuard который будет проверять является ли этот класс AdminBuilder
//     isAdmin(): this is AdminBuilder{
//         //Вернет тип если этот класс будет AdminBuilder
//         return this instanceof AdminBuilder;
//     }
// }
// class AdminBuilder extends UserBuilder {
//     roles!: string[];
// }  
// const res = new UserBuilder().setName('vasya');
// //Результатом будет AdminBuilder
// const res2 = new AdminBuilder().setName('vasya');
// let user: UserBuilder | AdminBuilder = new UserBuilder();
// if(user.isAdmin()){
//     //Вернет AdminBuilder
//     console.log(user);
// }else{
//     //Иначе вернет UserBuilder
//     console.log(user);
// }
/*Абстрактные классы */
//Абстрактный это модификатор класса его нельзя инстансировать (использовать через new Controller) можно только экстендить (наследовать)
//Также он может использовать методы классов которые его используют
// abstract class Controller {
//     abstract handle(req:any):void;
//     handleWithLogs(req:any){
//         console.log('Start');
//         this.handle(req);
//         console.log('End');
//     }
// }
// class UserController extends Controller{
//     handle(req: any): void {
//         console.log(req);
//     }
// }
// const c = new UserController();
// c.handleWithLogs('Request');
/*Упражнение Делаем абстрактный логгер */
// abstract class logChange {
//     abstract log(message:string):void;
//     printDate():void{
//         let b = new Date();
//         this.log(b.toString());
//     }
// }
// class logOutput extends logChange{
//     log(message: string): void {
//         console.log(message);
//     }
//     logWithDate(message: string):void{
//         this.printDate();
//         this.log(message);
//     }
// }
// const output = new logOutput();
// output.printDate();
// output.logWithDate('asdasd');
/*Generic примеры*/
//В <> скобках мы уточнили из чего состоит массив
// const num:Array<number> = [1,2,3]; 
// async function test(){
//     const a = new Promise<number>((resolve, reject)=>{
//         resolve(1);
//     })
// }
// //Record позволяет передать 2 значения джинерика 1 отвечает за тип ключа а 2 за его значение
// const check:Record<string,boolean> = {
//     drive: true,
//     kpp: false
// };
// //Джинерик сам определяет какого типа data и выводит ее
// function logMiddleWare<T >(data: T):T{
//     console.log(data);
//     return data;
// }
// //Можем валидировать джинерик чтобы определить что именно мы можем передать в функцию
// const res = logMiddleWare<number>(10);
// function getSplitHalf<T>(data: Array<T> ): Array<T>{
//     const l = data.length/2;
//     return data.splice(0,l);
// }
// getSplitHalf<number>([1,3,4])
/*Упражнение Функция преобразования в строку */
// function toStringFunc<T>(str:T):string | undefined{
//     if(Array.isArray(str)){
//         return str.toString();
//     }
//     switch(typeof str){
//         case 'string':
//             return str;
//         case 'number':
//         case 'symbol':
//         case 'bigint':
//         case 'boolean':
//         case 'function':
//             return str.toString();
//         case 'object':
//             return JSON.stringify(str);
//         default:
//             return undefined; 
//     }
// }
const a = [];
console.log(a.push(1));
