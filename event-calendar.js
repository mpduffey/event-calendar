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
        this.data.getEvents().subscribe(function (x) { return console.log("Events: ", x); });
    };
    EventCalendar = __decorate([
        core_1.Component({
            selector: 'event-calendar',
            template: "\n\t\t<section id=\"calendar\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h5>September</h5>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><p>Election Day</p></li>\n\t\t\t\t\t\t\t<li *ngFor=\"let event of events\">{{event.EventName}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h5>October</h5>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><p>Election Day</p></li>\n\t\t\t\t\t\t\t<li *ngFor=\"let event of events\">{{event.EventName}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<h5>November</h5>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><p>Election Day</p></li>\n\t\t\t\t\t\t\t<li *ngFor=\"let event of events\">{{event.EventName}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-md btn-color\" (click)=\"showModal()\">Submit an Event</button>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\tul {list-style: none;}\n\t\tsection {z-index: 1000;}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof wft_data_1.WFTDataService !== 'undefined' && wft_data_1.WFTDataService) === 'function' && _a) || Object, (typeof (_b = typeof modal_service_1.ModalService !== 'undefined' && modal_service_1.ModalService) === 'function' && _b) || Object])
    ], EventCalendar);
    return EventCalendar;
    var _a, _b;
}());
exports.EventCalendar = EventCalendar;
//# sourceMappingURL=event-calendar.js.map