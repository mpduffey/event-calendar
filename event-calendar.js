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
var wft_data_1 = require('modules/wft-data/wft-data');
var modal_service_1 = require('modules/modal/modal-service');
var EventCalendar = (function () {
    function EventCalendar(data, modal) {
        var _this = this;
        this.data = data;
        this.modal = modal;
        this.events = [];
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
        this.showModal = function () {
            _this.modal.formObject = _this.eventObject;
            _this.modal.title = "Suggest an Event for the Women for Trump!";
            _this.modal.showModal = true;
        };
        this.data = data;
        this.modal = modal;
    }
    EventCalendar.prototype.ngOnInit = function () {
        this.data.getEvents().subscribe(function (x) { console.log("Events: ", x); });
    };
    EventCalendar = __decorate([
        core_1.Component({
            selector: 'event-calendar',
            template: "\n\t\t<section id=\"calendar\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h3>September</h3>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, September 14th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Saturday, September 17th</p>\n\t\t\t\t\t\t\t\t<p><b>Constitution Day Celebration</b></p>\n\t\t\t\t\t\t\t\t<p>Locations</p>\n\t\t\t\t\t\t\t\t<p><b>Super Saturday</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, September 21st</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, September 28th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h3>October</h3>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, October 5th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, October 12th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, October 19th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, October 26th</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h3>November</h3>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Wednesday, November 2nd</p>\n\t\t\t\t\t\t\t\t<p><b>Ladies' Night at the Victory Center</b></p>\n\t\t\t\t\t\t\t\t<p><a href=\"https://www.wisgop.org/volunteer/\" target=\"_blank\">RPW Victory Offices</a></p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<p class=\"underline\">Tuesday, November 8th</p>\n\t\t\t\t\t\t\t\t<p><b>Election Day</b></p>\n\t\t\t\t\t\t\t\t<p>Locations</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li *ngFor=\"let event of events\">{{event.EventName}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n<!--\t\t\t\t<button class=\"btn btn-md btn-color\" (click)=\"showModal()\">Submit an Event</button> -->\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\tul {list-style: none; padding-left: 0;}\n\t\tli {margin-bottom: 15px;}\n\t\ta {color: #fff;}\n\t\tp {margin-bottom: 0;}\n\t\t.underline {text-decoration: underline;}\n\t\tsection {z-index: 1000;}\n\t\t.col-md-4 {margin-bottom: 30px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof wft_data_1.WFTDataService !== 'undefined' && wft_data_1.WFTDataService) === 'function' && _a) || Object, (typeof (_b = typeof modal_service_1.ModalService !== 'undefined' && modal_service_1.ModalService) === 'function' && _b) || Object])
    ], EventCalendar);
    return EventCalendar;
    var _a, _b;
}());
exports.EventCalendar = EventCalendar;
//# sourceMappingURL=event-calendar.js.map