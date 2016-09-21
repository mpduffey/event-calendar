import {Component, OnInit, Input}		from '@angular/core';
import {Filter}											from 'modules/filter-pipe/filter-pipe';

@Component({
	selector:				'sps-event-calendar',
	template:				`
		<section id="calendar" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div *ngFor="let month of monthArr" class="col-md-4">
						<h3>{{month | date:"MMMM"}}</h3>
						<ul>
							<li *ngFor="let event of events | filter:month.getMonth(); let i = index">
								<div *ngIf="i===0 || event.date.toDateString() !== events[i-1].date.toDateString()">
									<h5>{{event.date | date:'fullDate'}}</h5>
									<hr>
								</div>
								<p><b>{{event.name}}</b></p>
								<p *ngIf="event.date.getHours()">{{event.date | date:"shortTime"}}<span *ngIf="event.endDate"> - {{event.endDate | date:"shortTime"}}</span></p>
								<p *ngIf="event.location"><b>Location: </b>{{event.location}}</p>
								<p *ngIf="checkType(event.contact)!=='undefined'"><b>Contact: </b><span *ngIf="checkType(event.contact)==='string'">{{event.contact}}</span>
									<span *ngIf="checkExist(event.contact.name)">{{event.contact.name}}<span *ngIf="checkExist(event.contact.name) && (checkExist(event.contact.phone) || checkExist(event.contact.email))">,</span></span>
									<span *ngIf="checkExist(event.contact.phone)">{{event.contact.phone}}<span *ngIf="(checkExist(event.contact.phone) && checkExist(event.contact.email))">,</span></span>
									<span *ngIf="checkExist(event.contact.email)"><a href="mailto:{{event.contact.email}}" target="_top">{{event.contact.email}}</a></span>
								</p>
							</li>
						</ul>
					</div>
				</div>
<!--		<button class="btn btn-md btn-color" (click)="showModal()">Submit an Event</button> -->
			</div>
		</section>
	`,
	styles:					[`
		ul {list-style: none; padding-left: 0;}
		li {margin-bottom: 15px;}
		h5 {margin-bottom: 0; margin-top: 25px;}
		a {color: #fff;}
		p {margin-bottom: 0;}
		.underline {text-decoration: underline;}
		section {z-index: 1000;}
		.col-md-4 {margin-bottom: 30px;}
	`]
})

export class SpsEventCalendar implements OnInit {
	@Input() events;
	eventFields = [
    {name: "EventName", type: "STRING", defaultValue: "", custom: {label: "Event Name", labelAbove: false, css: {input: {width: "400px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "StartTime", type: "DATETIME", defaultValue: "", custom: {label: "Start Time", labelAbove: false, css: {input: {width: "197px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "EndTime", type: "DATETIME", defaultValue: "", custom: {label: "End Time", labelAbove: false, css: {input: {width: "198px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "Location", type: "STRING", defaultValue: "", custom: {label: "Location", labelAbove: false, css: {input: {width: "400px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
	];
	eventForm = {
    submit:     	function(x){console.log(x)},
		submitLabel:	"Save",
    controls:   	[
      {
        type: "fieldset",
        name: "Event Group",
        fields: [
          {classField: this.eventFields[0]},
          {classField: this.eventFields[1]},
          {classField: this.eventFields[2]},
          {classField: this.eventFields[3]}
        ]
      },
		]
	};
	eventObject = {
		fieldObject:		this.eventFields,
		formObject:			this.eventForm
	};
	monthArr = [];
	
	constructor() {}
	ngOnInit() {
		this.getMonths(this.events);
	}
	checkExist = (val) => {
		return typeof val !== 'undefined';
	}
	checkType = (val) => {
		return typeof val;
	}
	getMonths = (arr) => {
		this.monthArr = [];
		let months = [];
		arr.forEach((x,i,arr) => {
			if (!months.includes(x.date.getMonth())) {
				let mon = new Date();
				mon.setUTCMonth(x.date.getMonth());
				months.push(x.date.getMonth());
				this.monthArr.push(mon);
			}
		});
	}
}