"use strict";
/*Работа с типами */
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    //Присоединение к рассылке уведомлений
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    //Отсоединение к рассылке уведомлений
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log('NotificationService получил уведомление');
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log('LeadService получил уведомление');
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Антон', '0000');
const s1 = new NotificationService();
const s2 = new LeadService();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();
