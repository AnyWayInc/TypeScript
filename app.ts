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


/*Использование в типах */


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

// const split:<T>(data:Array<T>) => Array<T> = getSplitHalf; 

// interface ILogLine<T>{
//     timeStamp: Date;
//     date: T
// }

// //Тоже самое что и с интерфейсом
// type LogLineType <T> = {
//     timeStamp: Date;
//     date: T
// }

// const logLine: ILogLine<{a:number}> = {
//     timeStamp: new Date(),
//     date: {
//         a:1
//     }
// }



/*Ограничение generic */

//Можно в generic экстендить и интерфейс
// interface Vehicle{
//     run: number;
// }

// class Vehicle{
//     run!:number;
// }

// //Ограничили классом 
// function kmToMiles<T extends Vehicle>(vehicle:T): T{
//     vehicle.run = vehicle.run / 0.62;
//     return vehicle;
// }

// class LCV extends Vehicle{
//     capacity!: number;
// }

// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
// kmToMiles({ run: 1 })

// //Можно в extends писать и кастомные (юнион) типы, также можно несколько типов указать (T,Y)
// function logId<T extends number | string, Y >(id: T, addintionalData: Y): { id:T, data:Y }{
//     console.log(id);
//     console.log(addintionalData)
//     return { id, data:addintionalData };
// }



/*Упражнение Функция сортировки id */


// const data:IData[] = [
//     {id: 1, name: 'Вася'},
//     {id: 2, name: 'Петя'},
//     {id: 3, name: 'Надя'}
// ];

// interface IData {
//     id:number;
//     name:string;
// }

// function sortUpDown<T extends IData[]>(choice:string, array:T):T{
//     if(choice === 'up'){
//         return array.sort((a,b)=>a.id-b.id)
//     }else if(choice === 'down'){
//         return array.sort((a,b)=>{return b.id-a.id})
//     }throw new Error('Ты чет не то написал')
// }


// console.log(sortUpDown('down',data));



/*Generic классы */


// class Resp<D,E> {
//     data?:D;
//     error?:E;

//     constructor( data?:D, error?:E){
//         if(data){
//             this.data = data;
//         }
//         if(error){
//             this.error = error;
//         }
//     }
// }

// //Конструируем типы класса иначе будет string, unknown или другой в зависимости от введенных данных
// const res = new Resp<string,number>('data',0);

// class HTTPResp<F> extends Resp<string,number> {
//     code!:F;
    
//     setCode(code:F){
//         this.code = code;
//     }
// }

// const res2 = new HTTPResp();



/*Mixins */

// type Constructor = new (...args: any[]) => {}
// type GConstructor<T = {}> = new (...args: any[]) => T

// class List {
//     constructor (public items: string[]){}
// }

// class Accordion{
//     isOpened!:boolean;
// }

// type ListType = GConstructor<List>
// type AccordionType = GConstructor<Accordion>

// //Сам Mixin дает возможность примиксовать классы и также делать extends нескольких классов сделав их typecheck 
// //Использовать их гуд в миксовании маленьких классов 
// class ExtendedListClass extends List {
//     firs(){
//         return this.items[0];
//     }
// }

// function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase){
//     return class ExtendedList extends Base {
//         first(){
//             return this.items[0];
//         }
//     }
// }

// class AccordionList{
//     isOpened!:boolean;
//     constructor(public items: string[]){}
// }

// const list = ExtendedList(AccordionList);
// const res = new list(['first','second']);
// console.log(res.first());



/*KeyOf */


// interface IUser{
//     name: string;
//     age: number;
// }

// type KeysOfUser = keyof IUser;

// const key: KeysOfUser = 'age';

// function getValue<T, K extends keyof T>( obj:T, key:K ){
//     return obj[key];
// }

// const user: IUser= {
//     name:'Vasa',
//     age: 30
// }

// const userName = getValue(user,'name');



/*Упражнение Пишем функцию группировки */


// interface Data {
//     group: number;
//     name: string;
// }

// const data:Data[] = [
//     {group:1, name: 'a'},
//     {group:1, name: 'b'},
//     {group:3, name: 'c'},
// ]

// interface IGroup<T>{
//     [key:string]:T[] 
// }

// type key = string | number | symbol;

// function group<T extends Record<key,any>>(array: T[], key: keyof T):IGroup<T>{
//     return array.reduce<IGroup<T>>((acc: IGroup<T>,item )=>{
//         const itemKey = item[key];
//         let curEl =acc[itemKey];
//         if(Array.isArray(curEl)){
//             curEl.push(item);
//         }else {
//             curEl = [item];
//         }
//         acc[itemKey] = curEl;
//         return acc;
//     },{})
// }

// const res = group<Data>(data,'group')
// console.log(res);

// function GroupBy<T extends Data[],K extends keyof Data>(obj:T, key: K){
//     if(key == 'name'){
//         return obj.sort((a,b) => {
//             if (a.name < b.name)
//                 return -1;
//             if ( a.name > b.name)
//                 return 1;
//             return 0;})
//     }else if(key == 'group'){
//             console.log('1:',obj.filter(x =>x.group == 1));
//             console.log('2:',obj.filter(x =>x.group == 3));
//         }
// }


// console.log(GroupBy(data,'group'));
// // console.log(GroupBy(data,'name'));



/*Typeof */


// let strOrNum: string | number = 5;

// if(Math.random()>0.5){
//     strOrNum = 5;
// }else{
//     strOrNum = 'str';
// }

// if(typeof strOrNum === 'string'){
//     console.log(strOrNum);
// }else{
//     console.log(strOrNum);
// }

// let str2OrNum:typeof strOrNum; 

// const user = {
//     name:'Vasa'
// };

// //Будет name
// type keyOfUser = keyof typeof user;

// enum Direction {
//     Up,
//     Down
// }

// type d = keyof typeof Direction;



/*Indexed Access Types */


// interface Role{
//     name:   string;
// }

// interface User{
//     name: string;
//     roles: Role[];
//     permission:Prmission;
// }

// interface Prmission{
//     endDate: Date;
// }

// const user:User = {
//     name:'Vasa',
//     roles: [],
//     permission:{
//         endDate: new Date();
//     }
// }

// const nameUser = user['name'];
// const roleNames = 'roles'

// //Обращаемся к типу интерфейса User к свойству roles
// type roleTypes = User['roles'];
// //Не будет работать так как мы работаем с типами а не с объектами
// type roleTypes2 = User[roleNames];
// //А вот так все будет ок
// type roleTypes3 = User[typeof roleNames];

// //C помощью [number] мы можем получить элемент массива (тоесть его тип)
// type rolesType = User['roles'][number];
// type dateType = User['permission']['endDate'];

// //Конвертирует объект в read only
// const roles = ['admin','user','super-user'] as const;

// //Тип состоит из юниона между 'admin','user','super-user'
// type rolesTypes = typeof roles[number];



/*Conditional Types */


// const a1:number = Math.random()>0.5? 1 :0 ;

// interface HTTTPResponse<T extends 'success' | 'failed'>{
//     code:number;
//     data: T extends 'success'? string : Error;
//     // additionalData: T extends 'success'? string : number;
// }

// const err:HTTTPResponse<'success'> = {
//     code:200,
//     data:'done'
// }

// const err2:HTTTPResponse<'failed'> = {
//     code:200,
//     data: new Error()
// }

// class User {
//     id!:number;
//     name!: string;
// }

// class UserPersistend extends User{
//     dbId!: string;
// }

// function getUser(id: number):User;
// function getUser(dbId:string):UserPersistend;
// function getUser (dbIdOrId : string | number): User | UserPersistend{
//     if(typeof dbIdOrId === 'number'){
//         return new User();
//     }else{
//         return new UserPersistend();
//     }
// }

// type UserOrUserPersistend<T extends string | number> = T extends number? User: UserPersistend;

// function getUser2<T extends string | number>(id:T): UserOrUserPersistend<T>{
//     if(typeof id === 'number'){
//         //Проверка рантайм не сравнивает с проверкой type UserOrUserPersistend
//         return new User() as UserOrUserPersistend<T>;
//     }else{
//         return new UserPersistend() as UserOrUserPersistend<T>;
//     }
// }

// //Типа User
// const res = getUser2(1);
// //Типа UserPersistend
// const res2 = getUser2('dasd');



/*Infer */


// function runTrasaction(transaction: {
//     fromTo:[string,string]
// }){
//     console.log(transaction);
// }

// const transaction:GetFirsArg<typeof runTrasaction> = {
//     //По сути infer вытащил тип transaction из функции runTrasaction поэтому значение валидно
//     fromTo:['1','2']
//     //Как вариант фикса вот так 
//     // from: ['1','2'] as [string, string]
// }
// runTrasaction(transaction);

// //infer позволяет берет и псевдообъявляет переменную типа в extende
// type GetFirsArg<T> = T extends (first:infer First,...args:any[]) => any?First : never



/*Mapped Types */


// type Modifier = 'read' | 'write' | 'create';

// type UserRoles = {
//     customers?: Modifier;
//     projects?: Modifier;
//     adminPanel?: Modifier;
// }

// type ModifierToAccess<Type> = {
//     //Берем каждое свойство которое есть и каждый ключ который есть и меняем все это на boolean
//     [Property in keyof Type]:boolean;
//     //-? означает что все свойства обязательны
//     [Property in keyof Type]-?:boolean;
//     //-? означает что все свойства обязательны + только для чтения
//     +readonly [Property in keyof Type]-?:boolean;
//      //-? означает что все свойства обязательны + только для чтения к тому же изменяет все названия на canAccess+название свойства
//      +readonly [Property in keyof Type as <`canAccess${string & Property}`, 'canAccessadminPanel'>]-?:boolean;
//      //-? означает что все свойства обязательны + только для чтения к тому же изменяет все названия на canAccess+название свойства + убирает canAccessadminPanel
//      +readonly [Property in keyof Type as <`canAccess${string & Property}`, 'canAccessadminPanel'>]-?:boolean;
// }

// //UserAccess2 === UserAccess1
// type UserAccess2 = ModifierToAccess<UserRoles>;

// type UserAccess1 = {
//     customers?: boolean;
//     projects?: boolean;
//     adminPanel?: boolean;
// }




/*Упражнение - Валидация форм */



// interface IForm {
//     name:string;
//     password:string;
// }

// const form:IForm = {
//     name: 'Vasa',
//     password: '123'
// }

// //1 вариант
// type ModifierToAccess<Type> = {
//     [Property in keyof Type]-?:{isValid:boolean;errorMessage?:string;};
// }

// //2 вариант
// type validForm<T> = {
//     [K in keyof T]-?:{isValid:true} | {isValid:false; errorMessage:string;};
// }

// const formValidation:ModifierToAccess<IForm> = {
//     name: {isValid:true},
//     password: {isValid: false, errorMessage: 'Должно быть длинее 5 символов'}
// }



/*Template Literal Types */



// type ReadOrWrite = 'read' | 'write';
// type Bulk = 'bulk' | '';

// //candread | canwrite
// //Uppercase все с большой 
// //capitalize первая буква с большой
// //Canread CanreadBulk Canwrite CanwriteBulk
// type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

// type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R: never;

// type T = ReadOrWriteBulk<Access>;

// type ErrorOrSuccess = 'error' | 'success';

// interface ResponseT {
//     result: `http${Capitalize<ErrorOrSuccess>}`
// }

// const a: ResponseT ={
//     result: 'httpError'
// }



/*Partial, Required, Readonly */



// interface User{
//     name: string;
//     age?: number;
//     email: string;
// }

// //Partial говорит что все свойства User необязательны
// type partial = Partial<User>;
// const p:partial = {};

// //Required говорит что все свойства User обязательны
// type required = Required<User>;
// //Readonly говорит что все можно только читать
// type readonly = Readonly<User>;
// //Совместили 2 свойства
// type requiredAndReadonly = Required<Readonly<User>>;



/*Pick, Omit, Extract, Exclude */



// interface PaymentPersisten{
//     id: number;
//     sum: number;
//     from: string;
//     to: string;
// }

// //Исключает из интерфейса ненужный ключ
// type Payment = Omit<PaymentPersisten, 'id'>;
// //Получить из интерфейса только то что мы ввели
// type PaymentRequisits = Pick<PaymentPersisten, 'from'| 'to'>;
// //Из указанного типа вытащить те типы которые пересекаются со 2 
// type ExtractEx = Extract<'from' | 'to' | Payment, string>;
// //Вытаскиевает те типы которые различаются между 1 и 2 
// type ExcludetEx = Exclude<'from' | 'to' | Payment, string>;



/*ReturnType, Parameters, ConstructorParameters */


// class User {
//     constructor(public id: number, public name: string){}
// }

// function getData(id: number): User{
//     return new User(id,'Vasa');
// }

// //Возвращает тип функции 
// type RT = ReturnType<typeof getData>;

// //Возвращает параметры функции и его типы 
// type PT = Parameters<typeof getData>;
// //id: number
// type first = PT[0];
// //Короткий вариант
// type RT2 = Parameters<typeof getData>[0];
// type RT5 = ReturnType<()=> void>;
// //Сюда не обязательно писать typeof он сам найдет и вернет то что нужно
// type RT4 = ReturnType<<T>() => T>;
// //Тоже самое со строчными переменными
// type RT3 = ReturnType<<T extends string>()=> T>;
// type PT3 = Parameters<typeof getData>;

// //Вытаскивает все типы из конструктора класса
// type CP = ConstructorParameters<typeof User>;
// type IT = InstanceType<typeof User>;



/*Awaited */


//Вытаскивает типы из Promise
// type A = Awaited<Promise<string>>;
// type A2 = Awaited<Promise<Promise<string>>>;


// interface IMenu {
//     name: string;
//     url: string;
// }

// async function getMenu(): Promise<IMenu[]> {
//     return [{name:'Analytic',url:'analytics'}]
// }

// //Получаем IMenu 
// type R = Awaited<ReturnType<typeof getMenu>>;

// async function getArray<T>(x: T){
//     return [await x];
// }

// //Как было раньше
// async function getArray2<T>(x: T): Promise<Awaited<T>[]>{
//     return [await x];
// }



/*Паттерн декоратора */


// interface IUserService {
//     user: number;
//     getUsersInDatabase(): number;
// }

// export class UserService implements IUserService {
//     user: number = 1000;

//     getUsersInDatabase(): number {
//         return this.user;
//     }
// }


// function nullUser(obj: IUserService){
//     //... что то делаем 
//     obj.user = 0;
//     return obj;
// }

// function logUser(obj: IUserService){
//     //... что то делаем 
//     console.log('User: ' + obj.user)
//     return obj;
// }



// console.log(new UserService().getUsersInDatabase());
// //По сути nullUser это декоратор тоесть обертка
// console.log(nullUser(new UserService()).getUsersInDatabase());
// //Еще 1 фунцкия обертка тоесть последовательность выполнения функций влияет на результат 
// console.log(logUser(nullUser(new UserService())).getUsersInDatabase());



/*Декоратор класса */



// interface IUserService {
//     user: number;
//     getUsersInDatabase(): number;
// }

// @nullUser
// @nullUserAdvanced
// class UserService implements IUserService {
//     user!: number;

//     getUsersInDatabase(): number {
//         return this.user;
//     }
// }

// //Первым делом отрабатывает декоратор а потом уже все другие функции и классы
// function nullUser(target: Function,b:any){
//     //... что то делаем 
//     target.prototype.user = 0;
// }

// function nullUserAdvanced<T extends {new(...args:any[]):{}}>(constructor:T,b:any){
//     return class extends constructor{
//         user = 3;
//     }
// }


// console.log(new UserService().getUsersInDatabase());



/*Фабрика декораторов */



// interface IUserService {
//     user: number;
//     getUsersInDatabase(): number;
// }

// // @nullUser
// @setUsers(2)
// @log()
// // @nullUserAdvanced
// // @setUserAdvanced(4)
// class UserService implements IUserService {
//     user!: number;

//     getUsersInDatabase(): number {
//         return this.user;
//     }
// }

// //Первым делом отрабатывает декоратор а потом уже все другие функции и классы
// function nullUser(target: Function,b:any){
//     //... что то делаем 
//     target.prototype.user = 0;
// }

// //Функция производящая декораторы
// function setUsers(user:number){
//     console.log('setUsers init')
//     return (target:Function,a:any)=>{
//         target.prototype.user = user;
//         console.log('setUsers run');
//     }
// }

// //Порядок очень важен 
// function log(){
//     console.log('log init')
//     return (target:Function,a:any)=>{
//         console.log('log run');
//         console.log(target);
//     }
// }

// function setUserAdvanced(user:number){
//     return <T extends {new(...args:any[]):{}}>(constructor:T,b:any)=>{
//         return class extends constructor{
//             user = 3;
//         }
//     }
// }

// function nullUserAdvanced<T extends {new(...args:any[]):{}}>(constructor:T,b:any){
//     return class extends constructor{
//         user = 3;
//     }
// }


// console.log(new UserService().getUsersInDatabase());



/*Упражнение декоратор CreatedAt */

/*
    Декоратор, который добавляет свойство 
    createdAt в класс, фиксируя дату создания
*/


// interface IUserService {
//     users: number;
//     getUsersInDatabase(): number;
// }

// @AddCreated
// class UserService implements IUserService {
//     users:number = 1000;

//     getUsersInDatabase():number{
//         return this.users;
//     }
// }

// function AddCreated<T extends {new(...args:any[]):{}}>(constructor:T,b:any){
//     return  class extends constructor{
//         createdAt = new Date();
//     }
// }

// type CreatedAt = {
//     createdAt: Date
// }

// console.log((new UserService() as UserService & CreatedAt).createdAt);



/*Декоратор метода */


// interface IUserService {
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     users:number = 1000;

//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     @Log
//     getUsersInDatabase():number{
//         throw new Error('Ошибка');
//     }
// }

// //Декоратор методов 
// function Log(
//     target: Object,
//     propertyKey: string | symbol,
//     //Стандртное описание функции через generic 
//     descriptor: TypedPropertyDescriptor<(...args:any[]) => any>
// ):TypedPropertyDescriptor<(...args:any[]) => any | void>{
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);   
//     const oldValue = descriptor?.value; 
//     descriptor.value = () =>{
//         console.log('no error');
//     }
//     return {};
// }

// console.log(new UserService().getUsersInDatabase());



/*Упражнение Декоратор перехвата ошибок*/


// interface IUserService {
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     users:number = 1000;

//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     @Catch({rethrow: true})
//     getUsersInDatabase():number{
//         throw new Error('Ошибка');
//     }
// }

// //Декоратор методов 
// function Catch({rethrow}:{rethrow:boolean} = {rethrow: true}){
//     return(
//         target: Object,
//         _: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//     ): TypedPropertyDescriptor<(...args:any[])=> any> | void =>{
//         const method = descriptor.value; 
//         descriptor.value = async (...args: any[]) =>{
//             try{
//                 //Call, apply применяет или вызывает какой то метод к какому то объекту 
//                 const res = await method?.apply(target, args);
//                 return res;
//             }catch(e) {
//                 //instanceof проверяет принадлежит ли переменная типу ошибка или нет
//                 if(e instanceof Error){
//                     console.log(e);
//                     if(rethrow){
//                         //throw генерирует новую ошибку 
//                         throw e;
//                     }
//                 }
//             }
//         } 
//     }   
// }


// console.log(new UserService().getUsersInDatabase())
// let a = '[1,23,412]'

// //Убрал символы строки получилось [1,23,412]
// console.log(JSON.parse(a));
// //Поставил символ строки получилось "[1,23,412]"
// console.log(JSON.stringify(a));



/*Декоратор свойств */



// interface IUserService {
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     @Max(100)
//     users:number = 1000;

//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     getUsersInDatabase():number{
//         throw new Error('Ошибка');
//     }
// }

// function Max(max:number){
//     return(
//         //target служит класс в котором вызывается декоратов 
//         target: Object,
//         //propertyKey служат ключи лежащие в классе 
//         propertyKey: string | symbol,
//         // description: TypedPropertyDescriptor<(...args: any[])=> any>
//     ) =>{
//         let value:number;

//         const setter = function (newValue: number){
//             if(newValue > max){
//                 console.log(`Нельзя установить значение больше ${max}`);
//             }else{
//                 value = newValue;
//             }
//         }

//         const getter = function (){
//             return value;
//         }
//         //Object.defineProperty()метод определяет новое свойство непосредственно в объекте
//         //или изменяет существующее свойство объекта и возвращает объект.
//         //Таким образом он переопределяет get и set 
//         Object.defineProperty(target, propertyKey , {
//             set: setter,
//             get: getter
//         })
//     }
// }

// //В данном случае декоратор срабатывает при инициализации класса и сразу же отрабатывает 
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 1000;
// console.log(userService.users);



/*Декоратор accessor */



// interface IUserService {
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     private _users!: number;

//     @Log()
//     set users(num: number){
//         this._users = num;
//     }

//     get users(){
//         return this._users;
//     }

//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     getUsersInDatabase():number{
//         throw new Error('Ошибка');
//     }
// }

// //Его нельзя поставить к методу get, а также нельзя навесить 2 раза на разные методы 
// function Log(){
//     return(
//         //target служит класс в котором вызывается декоратов 
//         target: Object,
//         //propertyKey служат ключи лежащие в классе 
//         _: string | symbol,
//         description: PropertyDescriptor
//     ) =>{
//         const set = description.set;
//         description.set = (...args:any) => {
//             console.log(args);
//             //переопредилили set передав теже ключи и аргументы
//             set?.apply(target, args);
//         }
//     }
// }

// //В данном случае декоратор срабатывает при инициализации класса и сразу же отрабатывает 
// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);



/*Декоратор параметра */


// interface IUserService {
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     private _users!: number;


//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     getUsersInDatabase():number{
//         return this._users;
//     }

//     //Позволяет вывыести индекс вводимого элемента
//     setUsersInDatabase(@Positive() num: number,@Positive() num2: number ): void{
//         this._users = num;
//     }
// }

// //Его нельзя поставить к методу get, а также нельзя навесить 2 раза на разные методы 
// function Positive(){
//     return(
//         //target служит класс в котором вызывается декоратов 
//         target: Object,
//         //propertyKey служат ключи лежащие в классе 
//         propertyKey: string | symbol,
//         parametrIndex: number
//     ) =>{
//         console.log(target);
//         console.log(propertyKey);
//         console.log(parametrIndex);
//     }
// }

// //В данном случае декоратор срабатывает при инициализации класса и сразу же отрабатывает 
// const userService = new UserService();



/*Reflect метаданные */



// import 'reflect-metadata';

// const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

// interface IUserService {
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
//     private _users!: number;


//     //Это метод на котором лежит декоратор
//     //enumitable означает что можно отображать ключи и значения через различные циклы
//     //writeble озночает что можно изменять значение
//     //configurated озночает что можно удалять значения 
//     getUsersInDatabase():number{
//         return this._users;
//     }

//     @Validate()
//     //Позволяет вывыести индекс вводимого элемента
//     setUsersInDatabase(@Positive() num: number): void{
//         this._users = num;
//     }
// }

// //Его нельзя поставить к методу get, а также нельзя навесить 2 раза на разные методы 
// function Positive(){
//     return(
//         //target служит класс в котором вызывается декоратов 
//         target: Object,
//         //propertyKey служат ключи лежащие в классе 
//         propertyKey: string | symbol,
//         parameterIndex: number
//     ) =>{
//         //Существуют 3 ключа 
//         //design:type возвращает тип
//         //design:paramtypes возвращает тип параметров
//         //design:returntype возвращает тип того что возвращается
//         console.log(Reflect.getOwnMetadata('design:type',target,propertyKey));
//         console.log(Reflect.getOwnMetadata('design:paramtypes',target,propertyKey));
//         console.log(Reflect.getOwnMetadata('design:returntype',target,propertyKey));
//         let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY,target,propertyKey) || [];
//         existParams.push(parameterIndex);
//         Reflect.defineMetadata(POSITIVE_METADATA_KEY,existParams,target,propertyKey);
//     }
// }

// function Validate(){
//     return(
//         //target служит класс в котором вызывается декоратов 
//         target: Object,
//         //propertyKey служат ключи лежащие в классе 
//         propertyKey: string | symbol,
//         descriptior: TypedPropertyDescriptor<(...args:any) => any>
//     ) =>{
//         let method = descriptior.value;
//         descriptior.value = function (...args:any){
//             let posiriveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY,target,propertyKey) || [];
//             if(posiriveParams){
//                 //По каждому элементу
//                 for(let index of posiriveParams){
//                     if(args[index]<0){
//                         throw new Error('Число должно быть больше 0');
//                     }
//                 }
//             }
//             return method?.apply(this, args);
//         }

//     }
// }

// //В данном случае декоратор срабатывает при инициализации класса и сразу же отрабатывает 
// const userService = new UserService();
// console.log(userService.setUsersInDatabase(0))
// // console.log(userService.setUsersInDatabase(-1))




/*Порядок декораторов */


//Сначала инициализируются не статические, а потом уже статики, после уже класс и параметры конструктора потом их вызов
//Порядок влияет только на уровне инициализации в классе 
// function Uni(name: string):any{
//     console.log('Инициализация ', name);
//     return function (){
//         console.log('Вызов: ', name);
//     }
// }

// @Uni('Класс')
// class MyClass{
//     @Uni('Свойство')
//     props?: any;

//     @Uni('Свойство static')
//     static props2?: any;

//     @Uni('Метод static')
//     static method2(@Uni('Параметр метода static') _:any){}

//     @Uni('Метод')
//     method(@Uni('Параметр метода') _:any){}

//     constructor(@Uni('Конструктора') _:any){

//     }
// }



/*Namespaces и reference */


// //namespace это обертка которая позволяет инкапсулировать внутри себя какую то логику
// namespace A{
//     export const a = 5;

//     export interface B{
//         c: number;
//     }
// }

// //После этого мы можем обращаться к этому namespace чтобы достать какие то константы и тд

// A.a;

// //reference это когда все файлы имеют 1 глобальное пространство и компилируются в 1 файл поэтому их лучше не использовать

// //Позволяет таким указыванием пути откуда берется переменная порядок компилирования 
// /// <reference path="./CodeWars/codeWats.ts"/>




/*
   Модульность Backend,FrontEnd
   Import Export 
*/


// import {A} from './exportingFile';
// //Так вызываются default элеемнты,причем мы можем их переименовать
// import run from './exportingFile';
// //Означает что мы берем все + default из файла 
// import * as all from './exportingFile';
// //Можно также импортировать через запятую то что нам нужно
// import run,{A} from './exportingFile';
// //Также можно импортировать с переименованием
// import {Test as obj} from './exportingFile';
// //Также можно импортировать типы
// import {MyType} from './exportingFile';
// //import type озночает что только тип 
// import type {MyType} from './exportingFile';
// //Или так 
// import {type MyType} from './exportingFile';


// run();
// console.log(A.a);
// console.log(all.A.a);




/*Типизация стороних библиотек */

//Как вариант исользовать @ts-ignore, но лучше создать файлик и объявить там модуль и типизировать нужные нам функции 
// import {toJson} from 'really-relaxed-json'
// const rjson = '[one two three {foo:one}]'
// const json = toJson(rjson);
// console.log(json);



/*Factory method */



// interface IInsurance {
//     id: number;
//     status: string;
//     setVehicle(vehicle: any):void;
//     submit():Promise<boolean>;
// }

// class TFInsurance implements IInsurance{
//     id!: number;
//     status!: string;
//     private vehicle: any;

//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }
//     async submit(): Promise<boolean> {
//         const res = await fetch('', {method: 'POST', body: JSON.stringify({ vehicle: this.vehicle })});
//         const data = await res.json();
//         return data.isSuccess;
//     }
// }

// //Отдельная реализация класса выше со своим функционалом
// class ABInsurance implements IInsurance{
//     id!: number;
//     status!: string;
//     private vehicle: any;

//     setVehicle(vehicle: any): void {
//         this.vehicle = vehicle;
//     }
//     async submit(): Promise<boolean> {
//         //fetch(url, [options])
//         //url – URL для отправки запроса.
//         //options – дополнительные параметры: метод, заголовки и так далее. 
//         //Без options это простой GET-запрос, скачивающий содержимое по адресу url. 
//         const res = await fetch('ab', {method: 'POST', body: JSON.stringify({ vehicle: this.vehicle })});
//         const data = await res.json();
//         return data.yes;
//     }   
// }

// //Сама фабрика, тоесть есть какая то основа которая будет использоваться в других классах 
// //Метод abstract позволяет создавать классы которые нельзя создать но можно расширить и наследовать от него что то
// //Абстрактный это модификатор класса его нельзя инстансировать (использовать через new Controller) можно только экстендить (наследовать)
// //Также он может использовать методы классов которые его используют
// abstract class InsuranceFactory {
//     db:any;

//     abstract createInsurance(): IInsurance;

//     saveHistory(ins: IInsurance){
//         this.db.save(ins.id, ins.status);
//     }
// }

// class TFInsuranceFactory extends InsuranceFactory {
//     createInsurance():IInsurance{
//         return new TFInsurance;
//     }
// }

// class ABInsuranceFactory extends InsuranceFactory {
//     createInsurance():IInsurance{
//         return new ABInsurance;
//     }
// }

// //Мы может из любого класса наследованого работать с матодами абстрактного класса 
// const tfInsuranceFactory = new TFInsuranceFactory();
// const ins = tfInsuranceFactory.createInsurance();
// tfInsuranceFactory.saveHistory(ins);




// //2 реализация 


// const INSURANCE_TYPE = {
//     tf: TFInsurance,
//     ab: ABInsurance
// }

// type IT = typeof INSURANCE_TYPE;

// class InsuranceFactoryAlternative {
//     db: any;

//     createInsurance<T extends keyof IT>(type: T): IT[T]{
//         return INSURANCE_TYPE[type];
//     }

//     saveHistory(ins: IInsurance){
//         this.db.save(ins.id, ins.status);
//     }
// }

// //Суть 1 и таже только 2 вариант покомпактнее, так как не используем новые классы а просто ориентируемся на ключ который мы передаем 
// //У этого способа есть 1 минус, состоит в том что сложно дописывать новый код
// const insuranceFactoryAlt = new InsuranceFactoryAlternative();
// const ins2 = new (insuranceFactoryAlt.createInsurance('tf'));
// insuranceFactoryAlt.saveHistory(ins2);



/*Singleton */



// class MyMap {
//     private static instance: MyMap;

//     map: Map<number, string> = new Map();

//     private constructor(){

//     }

//     clean(){
//         this.map = new Map();
//     }

//     public static get():MyMap {
//         if(!MyMap.instance){
//             MyMap.instance = new MyMap();
//         }
//         return MyMap.instance;
//     }
// }

// class Service1 {
//     addMap(key: number, value:string){
//         const myMap = MyMap.get();
//         myMap.map.set(key,value);
//     }
// }

// class Service2 {
//     getKeys(key: number){
//         const myMap = MyMap.get();
//         console.log(myMap.map.get(key));
//         myMap.clean();
//         console.log(myMap.map.get(key));
//     }
// }

// new Service1().addMap(1,'Работает');
// new Service2().getKeys(1);



/*Прототип */



// interface Prototype<T> {
//     clone():T;
// }

// //Смысл в том чтобы создать клон какого то объекта тоесть клон самого себя для дальнейшего использования
// class UserHistory implements Prototype<UserHistory>{
//     createdAt: Date;

//     constructor(public email: string, public name: string) {
//         this.createdAt = new Date();
//     }

//     clone(): UserHistory {
//         let target = new UserHistory(this.email, this.name);
//         target.createdAt = this.createdAt;
//         return target;
//     }
// }

// //Получили новый объект и уже можем производить любые манипуляции с ним
// let user = new UserHistory('sda','adsa');
// console.log(user);
// let user2 = user.clone();
// user2.email = '21@mail.ru';
// console.log(user2);



/*Builder */


//У картинки есть еще масса разных свойств которые можно приписать к классу и чтобы было легче их приписывать существует Builder
//Builder позволяет упростить генерацию объектов
// enum ImageFormat {
//     Png = 'png',
//     Jpeg = 'jpg'
// }

// interface IResolution {
//     width: number;
//     height: number;
// }

// interface IImageComversion extends IResolution {
//     format: ImageFormat;
// }

// //Выполняет метод и всегда должен возвращать себя
// class ImageBuilder {
//     private formats: ImageFormat[] = [];
//     private resolutions: IResolution[] = []; 

//     addPng(){
//         if(this.formats.includes(ImageFormat.Png)){
//             return this;
//         }
//         this.formats.push(ImageFormat.Png);
//         return this;
//     }

//     addJpeg(){
//         if(this.formats.includes(ImageFormat.Jpeg)){
//             return this;
//         }
//         this.formats.push(ImageFormat.Jpeg);
//         return this;
//     }

//     addResolution(width: number, height: number){
//         this.resolutions.push({width,height})
//         return this;
//     }

//     //Каждая функция что то добавляет в финальный результат и возвращает обратно наш объект
//     build():IImageComversion[]{
//         const res: IImageComversion [] = [];
//         for(const r of this.resolutions){
//             for(const f of this.formats){
//                 res.push({
//                     format: f,
//                     width: r.width,
//                     height: r.height
//                 })
//             }
//         }
//         return res;
//     }
// }


// console.log(new ImageBuilder()
//     .addJpeg()
//     .addPng()
//     .addResolution(100,50)
//     .addResolution(200,100)
//     .build()
// )



/*Bridge */



// interface IProvider {
//     sendMessage(message: string): void;
//     connect(config: string): void;
//     disconnect(): void;
// }

// class TelegramProvider implements IProvider {
//     sendMessage(message: string): void {
//         console.log(message);
//     }
//     connect(config: string): void {
//         console.log(config);
//     }
//     disconnect(): void {
//         console.log('Disconnect');
//     }
// }

// class WhatsUpProvider implements IProvider {
//     sendMessage(message: string): void {
//         console.log(message);
//     }
//     connect(config: string): void {
//         console.log(config);
//     }
//     disconnect(): void {
//         console.log('Disconnect WU');
//     }
// }

// class NotificationSender {
//     constructor(private provider: IProvider){}

//     send(){
//         this.provider.connect('connect');
//         this.provider.sendMessage('message');
//         this.provider.disconnect();
//     }
// }

// class DelayNotifiationSender extends NotificationSender {
//     constructor(provider: IProvider){
//         super(provider);
//     }
    
//     sendDelayed(){
//     }
// }

// const sender = new NotificationSender(new TelegramProvider());
// sender.send();

// const sender2 = new DelayNotifiationSender(new WhatsUpProvider());
// sender2.send(); 




/*Facade */



//Используется для того чтобы скрыть какие то сложные методы от глаз пользователя 
//И вместо этого использовать какие то простые для понимания методы
//Условно телеграм и кнопка отправить сообщение 

// class Notify{
//     send(template:string, to: string){
//         console.log(`Отправляю ${template}: ${to}`);
//     }
// }

// class Log {
//     log(message: string){
//         console.log(message);
//     }
// }

// class Template {
//     private templates = [
//         {name: 'other', template:'<h1>Шаблон</h1>'}
//     ]

//     getByName(name: string){
//         return this.templates.find(t => t.name === name);
//     }
// }

// class NotificationFacade {
//     private notify: Notify;
//     private logger: Log;
//     private template: Template;
    
//     constructor(){
//         this.notify = new Notify();
//         this.logger = new Log();
//         this.template = new Template();
//     }

//     send(to: string, templateName: string){
//         const data = this.template.getByName(templateName);
//         if(!data){
//             this.logger.log('Не найден шаблон');
//             return;
//         }
//         this.notify.send(data.template, to);
//         this.logger.log('Шаблон отправлен');
//     }
// }

// const s = new NotificationFacade();
// s.send('1dasa','sadsa');



/*Adapter */



//Условно говоря адаптер позволяет адаптировать неподходящий объект для использования в нашей среде 

// class KVDatabase {
//     private db: Map<string,string> = new Map;

//     save(key: string, value: string){
//         this.db.set(key,value);
//     }
// }

// class PersistentDB {
//     savePersistent(data: Object){
//         console.log(data);
//     }
// }

// //Экстендить нужно тот класс который мы хотим адаптировать
// class PersistentDBAdapter extends KVDatabase {
//     constructor(public database: PersistentDB) {
//         super();
//     }

//     override save(key: string, value: string):void {
//         //Тут уже взаимодействуем не с исходной database а с persistent
//         this.database.savePersistent({key,value});
//     }
// }

// function run(base: KVDatabase) {
//     base.save('key','myValue');
// }

// //Вот мы адаптировали PersistentDB для сторонней базы PersistentDBAdapter так как этот класс экстендит KVDatabase
// run(new PersistentDBAdapter(new PersistentDB));




/*Proxy */



//Мы добавляем дополнительный слой(класс) который позволяет обращаться к объекту
//Что позволяет не обращаться напрямую к изначальному объекту к тому же использовать свойства и методы прокси слоя
// interface IPaymentAPI{
//     getPaymentDetails(id: number): IPaymentDetail | undefined;
// } 

// interface IPaymentDetail {
//     id: number;
//     sum: number;
// }

// class PaymentAPI implements IPaymentAPI{
//     private data = [{id: 1, sum: 10000}]

//     getPaymentDetails(id: number): IPaymentDetail | undefined {
//         return this.data.find(d => d.id === id);
//     }
// }

// class PaymentAccessProxy implements IPaymentAPI{
//     constructor(private api: PaymentAPI, private userId: number) {}

//     getPaymentDetails(id: number): IPaymentDetail | undefined {
//         if(this.userId === 1){
//             return this.api.getPaymentDetails(id);
//         }
//         console.log('Попытка получить данные платежа!');
//         return undefined;
//     }
// }

// const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
// console.log(proxy.getPaymentDetails(1));

// const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
// console.log(proxy2.getPaymentDetails(1));




/*Composite */



//Он позволяет упростить работу древовидных структур
//Путем создания абстрактного класса который будет выдергивать определенные компоненты из других классов


//Как видно ниже мы создаем абстрактный getPrice и во всех классах созаем такой же метод благодоря чему мы цепляем цену
// abstract class DeliveryItem {
//     items:DeliveryItem[] = [];

//     addItem(item: DeliveryItem){
//         this.items.push(item);
//     }

//     getItemPrices():number{
//         return this.items.reduce((acc:number, i: DeliveryItem)=> acc+=i.getPrice(),0);

//     }

//     abstract getPrice():number;
// }

// export class DeliveryShop extends DeliveryItem {
//     constructor(private deliveryFee: number){
//         super();
//     }

//     getPrice(): number {
//         return this.getItemPrices() + this.deliveryFee;
//     }
// }

// export class Package extends DeliveryItem {
//     getPrice(): number {
//         return this.getItemPrices();
//     }
// }

// export class Product extends DeliveryItem {
//     constructor(public price:number){
//         super();
//     }

//     getPrice(): number {
//         return this.price;
//     }
    
// }

// //Как видно ниже мы насоздавали кучу продутов с определенными ценами кучу упаковок с ценами и смогли получить общую стоймость 
// //Благодаря абстрактному классу
// const shop = new DeliveryShop(100);
// shop.addItem(new Product(1000));
// const pack1 = new Package();
// pack1.addItem(new Product(200));
// pack1.addItem(new Product(300))
// shop.addItem(pack1);
// const pack2 = new Package();
// pack2.addItem(new Product(30));
// shop.addItem(pack2);
// console.log(shop.getPrice());




/*Поведенчиские паттерны: Chain of Command */



//Суть в том чтобы создать разделение обязанностей например 1 класс занимается авторизацией 2 валидацией и тд
// interface IMiddleware {
//     next(mid: IMiddleware): IMiddleware;
//     handle(request: any): any;
// }

// abstract class AbstractMiddleware implements IMiddleware{
//     private nextMiddleware!: IMiddleware;

//     //Нужен для того чтобы что то добовлять
//     next(mid: IMiddleware): IMiddleware {
//         this.nextMiddleware = mid;
//         return mid;
//     }

//     //По сути дальше передаем данные по цепочки
//     handle(request: any) {
//         if(this.nextMiddleware){
//             return this.nextMiddleware.handle(request);
//         }
//         return;
//     }
// }

// class AuthMiddleware extends AbstractMiddleware {
//     override handle(request: any) {
//         console.log('AuthMiddleware');
//         if(request.userID === 1){
//             return super.handle(request);
//         }
//         return {error: 'Вы не авторизированы'};
//     }
// }

// class ValidateMiddlware extends AbstractMiddleware {
//     override handle(request: any) {
//         console.log('ValidateMiddlware');
//         if(request.body){
//             return super.handle(request);
//         }
//         return {error: 'Нет body'};
//     }
// }

// class Controller extends AbstractMiddleware {
//     override handle(request: any) {
//         console.log('Controller');
//         return {error: 'Success'};
//     }
// }

// const controller = new Controller();
// const validate = new ValidateMiddlware();
// const auth = new AuthMiddleware();

// //Через точку мы уже обращаемся к методам класса которой передаем в скобках
// auth.next(validate).next(controller);

// console.log(auth.handle({
//     userID: 1,
//     body: 'asdas'
// }))




/*Mediator */



//Используется для того чтобы связать разрозненные компоненты 
//По сути это компонент который выполняет связанность между разными компонентами

// interface IMediator {
//     notify(sender: string, event: string): void;
// }

// abstract class Mediated {
//     mediator!: IMediator;
//     setMediator(mediator: IMediator){
//         this.mediator = mediator;
//     }
// }

// class Notifications {
//     send(){
//         console.log('Отправляю уведомления');
//     }
// }

// class Log {
//     log(message: string){
//         console.log(message);
//     }
// }

// class EventHandler extends Mediated {
//     myEvent(){
//         this.mediator.notify('EventHandler', 'myEvent')
//     }
// }

// class NotificationMediator implements IMediator {
//     constructor(
//         public notifications: Notifications,
//         public logger: Log,
//         public handler: EventHandler
//     ){}
    
//     notify(sender: string, event: string): void {
//         switch(event){
//             case 'myEvent':
//                 this.notifications.send();
//                 this.logger.log('Отправлено');
//         }
//     }
// }

// const handler = new EventHandler();
// const logger = new Log();
// const notification = new Notifications();

// const m = new NotificationMediator(
//     notification,
//     logger,
//     handler
// );

// handler.setMediator(m);
// handler.myEvent();




/*Command */



//Это отдельный класс который позволяет обращаться к классу не напрямую а через вспомогательный класс

// class User {
//     constructor(public userID: number){}
// }

// class CommandHistory {
//     public commands: Command[] = [];

//     push(command: Command){
//         this.commands.push(command);
//     }

//     remove(command: Command){
//         this.commands = this.commands.filter(c => c.commandId !== command.commandId);
//     }
// }

// abstract class Command {
//     public commandId: number;

//     abstract execute():void;

//     constructor(public history: CommandHistory){
//         this.commandId = Math.random();
//     }
// } 

// class AddUserCommand extends Command{
//     execute(): void {
//         this.receiver.saveUser(this.user);
//         this.history.push(this);
//     }
    
//     //Позволяет все это вернуть
//     undo(){
//         this.receiver.deleteUser(this.user.userID)
//         this.history.remove(this);
//     }

//     constructor(private user:User, private receiver: UserService, history: CommandHistory){
//         super(history);
//     }
// }

// class UserService {
//     saveUser(user:User){
//         console.log('Сохраняет пользователя с id ', user.userID);
//     }

//     deleteUser(userID: number){ 
//         console.log('Удаляем пользователя с id',userID);
//     }
// }

// class Controller {
//     reveiver!: UserService;
//     history: CommandHistory = new CommandHistory();

//     addReceiver(receiver: UserService) {
//         this.reveiver = receiver;
//     }

//     run(){
//         const addUserCommand = new AddUserCommand(
//             new User(1),
//             this.reveiver,
//             this.history
//         );
//         addUserCommand.execute();  
//         console.log(addUserCommand.history);
//         addUserCommand.undo();
//         console.log(addUserCommand.history);
//     }
// }

// const controller = new Controller();
// controller.addReceiver(new UserService());
// controller.run();




/*State */



//Позволяет распределить логику между классами (модерация только в модерации документы в документах и тд)

// class DocumentItem {
//     public text!: string;
//     private state!: DocumentItemState;

//     constructor(){
//         this.setState(new DraftDocumentItemState());
//     }

//     getState(){
//         return this.state;
//     }

//     setState(state: DocumentItemState){
//         this.state = state;
//         this.state.item = this;
//     }

//     publishDoc(){
//         this.state.publish();
//     }

//     deleteDoc(){
//         this.state.delete();
//     }
// }

// abstract class DocumentItemState {
//     public name!: string;
//     public item!:  DocumentItem;

//     private setContext(item: DocumentItem){
//         this.item = item;
//     }

//     public abstract publish(): void;
//     public abstract delete(): void;
// }

// class DraftDocumentItemState extends DocumentItemState {
//     constructor(){
//         super();
//         this.name = 'DraftDocument'
//     }

//     public publish(): void {
//         console.log('На сайт отправлен текст', this.item.text);
//         this.item.setState(new PublishDocumentItemState());
//     }
//     public delete(): void {
//         console.log('Документ удален')
//     }

// }

// class PublishDocumentItemState extends DocumentItemState {
//     constructor(){
//         super();
//         this.name = 'DraftDocument'
//     }

//     public publish(): void {
//         console.log('Нельзя опубликовать опубликованный документ')
//     }
//     public delete(): void {
//         console.log('Снято с публикации');
//         this.item.setState(new DraftDocumentItemState());
//     }

// }

// //Теперь мы можем реализовывать бизнес логику без привязки к state
// const item = new DocumentItem();
// item.text = 'Мой пост!';
// console.log(item.getState());
// item.publishDoc();
// console.log(item.getState());
// item.publishDoc();
// item.deleteDoc();
// console.log(item.getState());




/*Strategy */



//Очень часто используется для авторизации например может быть много разных провайдеров авторизации (гугл гитхаб и тд) 
//Выделяется какой то интерфейс авторизации и мы налету определяем стратегию авторизации (гит гугл и тд)

// class User {
//     gitHubToken!: string;
//     jwtToken!: string;
// }

// //Описание алгоритмов авторизации универсальное
// interface AuthStratagy {
//     auth(user: User): boolean;
// }

// class Auth {
//     constructor(private strategy: AuthStratagy){}

//     setStrategy(strategy: AuthStratagy){
//         this.strategy = strategy;
//     }

//     public authUser(user: User): boolean {
//         return this.strategy.auth(user);
//     }
// }

// class JWTStrategy implements AuthStratagy {
//     auth(user: User): boolean {
//         if(user.jwtToken){
//             return true;
//         }
//         return false;
//     }
// }

// class GitHubStrategy implements AuthStratagy {
//     auth(user: User): boolean {
//         if(user.gitHubToken){
//             return true;
//         }
//         return false;
//     }
// }

// //Теперь у нас есть 2 стратегии которые мы можем налету менять
// const user = new User();
// user.jwtToken = 'token';
// const auth = new Auth(new JWTStrategy());
// console.log(auth.authUser(user));
// auth.setStrategy(new GitHubStrategy());
// console.log(auth.authUser(user));




/*Iterator */



//Паттерн необходим когда нужно несколько раз проходится по данным

// class Task {
//     constructor(public priority: number){}
// }

// class TaskList {
//     private tasks: Task[] = [];

//     public sortByPriority(){
//         this.tasks = this.tasks.sort((a, b)=>{
//             if(a.priority > b.priority){
//                 return 1;
//             }else if(a.priority  == b.priority){
//                 return 0;
//             }else{
//                 return -1;
//             }
//         })
//     }

//     public addTask(task: Task){
//         this.tasks.push(task);
//     }

//     public getTask(){
//         return this.tasks;
//     }

//     public count(){
//         return this.tasks.length;
//     }

//     //Сама суть в том что он возвращает сам итератор благодоря чему проходит его еще раз
//     public getIterator(){
//         return new PriorityIterator(this);
//     }
// }

// interface IIterator<T> {
//     current(): T | undefined;
//     next(): T | undefined;
//     prev(): T | undefined;
//     index(): number;
// }

// //Должны быть упорядочены по приоритету
// class PriorityIterator implements IIterator<Task>{
//     private position: number = 0;
//     private taskList!: TaskList;

//     constructor(taskList: TaskList){
//         //Приоритет
//         taskList.sortByPriority();
//         this.taskList = taskList;
//     }

//     current(): Task | undefined {
//         return this.taskList.getTask()[this.position];
//     }
//     next(): Task | undefined {
//         this.position += 1;
//         return this.taskList.getTask()[this.position];
//     }
//     prev(): Task | undefined {
//         this.position -= 1;
//         return this.taskList.getTask()[this.position];
//     }
//     index(): number {
//         return this.position;
//     }
// }

// const taskList = new TaskList();
// taskList.addTask(new Task(8));
// taskList.addTask(new Task(1));
// taskList.addTask(new Task(3));
// const Iterator = taskList.getIterator();
// console.log(Iterator.current());
// console.log(Iterator.next())
// console.log(Iterator.next())
// console.log(Iterator.prev())
// console.log(Iterator.index())




/*Template Method */



//Суть в том что обычно мы берем форму формируем из нее объект, залогировать отправку и отправляем в api
//Сам паттерн сокращает количество действий благодоря созданию класса который сам будет создовать, логировать и отправлять
//Благодаря чему из самой формы нужно всего то вызвать метод save()
//Тоесть разделение ответственности благодаря абстактному методу
// class Form {
//     constructor(public name: string){}
// }

// abstract class SaveForm<T>{
//     public save(form: Form){
//         const res = this.fill(form);
//         this.log(res);
//         this.send(res);
//     }

//     protected abstract fill(form: Form): T;

//     protected log(data: T): void{
//         console.log(data);
//     };

//     protected abstract send(data: T): void;
// }

// //Благодаря тому что унаследовалось это api будет наследовать то что является его зоной ответсвенности тоесть отправкой
// class FirstAPI extends SaveForm<string>{
//     protected fill(form: Form): string {
//         return form.name;
//     }
//     protected send(data: string): void {
//         console.log('Отправляю',data)
//     }
// }

// class SecondAPI extends SaveForm<{fio:string}>{
//     protected fill(form: Form): {fio:string} {
//         return {fio: form.name};
//     }
//     protected send(data: {fio:string}): void {
//         console.log('Отправляю',data)
//     }
// }

// const form1 = new FirstAPI();
// form1.save(new Form('Вася'));
// const form2 = new SecondAPI();
// form2.save(new Form('Вася'))




/*Observer */



//По сути это модель EventListen
//Допустим у нас приходит какая то форма и ты должен отправить клиенту уведомление
//И приходится постоянно проверять есть ли новые уведомления или нет
//А должо работать так что 1 раз подписался и само придет
//По сути они должны получать уведомления как только появятся новые новости к примеру 

// interface Observer{
//     //По сути мы дергаем этот метод когда пришел объект
//     update(subject: Subject): void;
// }

// interface Subject {
//     attach(observer: Observer):void;
//     detach(observer: Observer):void;
//     notify():void;
// }

// class Lead { 
//     constructor(public name: string, public phone: string){}
// }

// class NewLead implements Subject{
//     private observers: Observer[] = [];
//     public state!: Lead;

//     //Присоединение к рассылке уведомлений
//     attach(observer: Observer): void {
//         if(this.observers.includes(observer)){
//             return;
//         }
//         this.observers.push(observer);
//     }

//     //Отсоединение к рассылке уведомлений
//     detach(observer: Observer): void {
//         const observerIndex = this.observers.indexOf(observer);
//         if(observerIndex == -1 ){
//             return;
//         }
//         this.observers.splice(observerIndex, 1);
//     }

//     notify(): void {
//         for( const observer of this.observers){
//             observer.update(this);
//         }
//     }
// }

// class NotificationService implements Observer{
//     update(subject: Subject): void {
//         console.log('NotificationService получил уведомление');
//         console.log(subject);
//     }
// }

// class LeadService implements Observer{
//     update(subject: Subject): void {
//         console.log('LeadService получил уведомление');
//         console.log(subject);
//     }
// }


// const subject = new NewLead();
// subject.state = new Lead('Антон', '0000');
// const s1 = new NotificationService();
// const s2 = new LeadService();

// subject.attach(s1);
// subject.attach(s2);
// subject.notify();
// subject.detach(s1);
// subject.notify();



/*Финальный проект */