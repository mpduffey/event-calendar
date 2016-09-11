import {Component, OnInit}		from '@angular/core';
import {WFTDataService}				from 'modules/wft-data/wft-data';
import {ModalService}         from 'modules/modal/modal-service';

@Component({
	selector:				'event-calendar',
	template:				`
		<section id="calendar" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<h5>September</h5>
						<ul>
							<li><p>Election Day</p></li>
							<li *ngFor="let event of events">{{event.EventName}}</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h5>October</h5>
						<ul>
							<li><p>Election Day</p></li>
							<li *ngFor="let event of events">{{event.EventName}}</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h5>November</h5>
						<ul>
							<li><p>Election Day</p></li>
							<li *ngFor="let event of events">{{event.EventName}}</li>
						</ul>
					</div>
				</div>
				<button class="btn btn-md btn-color" (click)="showModal()">Submit an Event</button>
			</div>
		</section>
	`,
	styles:					[`
		ul {list-style: none;}
		section {z-index: 1000;}
	`]
})

export class EventCalendar implements OnInit {
	events = [];
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
	}
	
	constructor(private data: WFTDataService, private modal: ModalService) {
		this.data = data;
		this.modal = modal;
	}
	ngOnInit() {
		this.data.getEvents().subscribe(x => console.log("Events: ", x);)
	}
	showModal = () => {
		this.modal.formObject = this.eventObject;
		this.modal.title = "Suggest an Event for the Women for Trump!";
		this.modal.showModal = true;
	}
}