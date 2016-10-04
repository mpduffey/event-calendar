"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SpsEventCalendar = (function () {
    function SpsEventCalendar() {
        var _this = this;
        this.eventFields = [
            { name: "EventName", type: "STRING", defaultValue: "", custom: { label: "Event Name", labelAbove: false, css: { input: { width: "400px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "StartTime", type: "DATETIME", defaultValue: "", custom: { label: "Start Time", labelAbove: false, css: { input: { width: "197px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "EndTime", type: "DATETIME", defaultValue: "", custom: { label: "End Time", labelAbove: false, css: { input: { width: "198px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "Location", type: "STRING", defaultValue: "", custom: { label: "Location", labelAbove: false, css: { input: { width: "400px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
        ];
        this.eventForm = {
            submit: function (x) { console.log(x); },
            submitLabel: "Save",
            controls: [
                {
                    type: "fieldset",
                    name: "Event Group",
                    fields: [
                        { classField: this.eventFields[0] },
                        { classField: this.eventFields[1] },
                        { classField: this.eventFields[2] },
                        { classField: this.eventFields[3] }
                    ]
                },
            ]
        };
        this.eventObject = {
            fieldObject: this.eventFields,
            formObject: this.eventForm
        };
        this.monthArr = [];
        this.checkExist = function (val) {
            return typeof val !== 'undefined';
        };
        this.checkType = function (val) {
            return typeof val;
        };
        this.getMonths = function (arr) {
            _this.monthArr = [];
            var months = [];
            arr.forEach(function (x, i, arr) {
                if (!months.includes(x.date.getMonth())) {
                    var mon = new Date();
                    mon.setMonth(x.date.getMonth());
                    months.push(x.date.getMonth());
                    _this.monthArr.push(mon);
                }
            });
        };
        this.filterArr = function (arr, month) {
            return arr.filter(function (x) {
                return x.date.getMonth() === month;
            });
        };
    }
    SpsEventCalendar.prototype.ngOnInit = function () {
        this.getMonths(this.events);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SpsEventCalendar.prototype, "events", void 0);
    SpsEventCalendar = __decorate([
        core_1.Component({
            selector: 'sps-event-calendar',
            template: "\n\t\t<section id=\"calendar\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div *ngFor=\"let month of monthArr\" class=\"col-md-6\">\n\t\t\t\t\t\t<h3>{{month | date:\"MMMM\"}}</h3>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"let event of events | filter:month.getMonth(); let i = index\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"i===0 || event.date.toDateString() != filterArr(events, month.getMonth())[i-1].date.toDateString()\">\n\t\t\t\t\t\t\t\t\t<h5>{{event.date | date:'fullDate'}}</h5>\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p><b>{{event.name}}</b></p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"event.date.getHours()\">{{event.date | date:\"shortTime\"}}<span *ngIf=\"event.endDate\"> - {{event.endDate | date:\"shortTime\"}}</span></p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"event.location\"><b>Location: </b>{{event.location}}</p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"checkType(event.contact)!=='undefined'\"><b>Contact: </b><span *ngIf=\"checkType(event.contact)==='string'\">{{event.contact}}</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkExist(event.contact.name)\">{{event.contact.name}}<span *ngIf=\"checkExist(event.contact.name) && (checkExist(event.contact.phone) || checkExist(event.contact.email))\">,</span></span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkExist(event.contact.phone)\">{{event.contact.phone}}<span *ngIf=\"(checkExist(event.contact.phone) && checkExist(event.contact.email))\">,</span></span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"checkExist(event.contact.email)\"><a href=\"mailto:{{event.contact.email}}\" target=\"_top\">{{event.contact.email}}</a></span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n<!--\t\t<button class=\"btn btn-md btn-color\" (click)=\"showModal()\">Submit an Event</button> -->\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\tul {list-style: none; padding-left: 0;}\n\t\tli {margin-bottom: 35px;}\n\t\th5 {margin-bottom: 0; margin-top: 25px;}\n\t\ta {color: #fff;}\n\t\tp {margin-bottom: 0;}\n\t\t.underline {text-decoration: underline;}\n\t\tsection {z-index: 1000;}\n\t\t.col-md-4 {margin-bottom: 30px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpsEventCalendar);
    return SpsEventCalendar;
}());
exports.SpsEventCalendar = SpsEventCalendar;
//# sourceMappingURL=sps-event-calendar.js.map