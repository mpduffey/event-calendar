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
						<h3>September</h3>
						<ul>
							<li>
								<p class="underline">Wednesday, September 14th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Saturday, September 17th</p>
								<p><b>Constitution Day Celebration</b></p>
								<p>Locations</p>
								<p><b>Super Saturday</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Wednesday, September 21st</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Wednesday, September 28th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h3>October</h3>
						<ul>
							<li>
								<p class="underline">Wednesday, October 5th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Wednesday, October 12th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Wednesday, October 19th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Wednesday, October 26th</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h3>November</h3>
						<ul>
							<li>
								<p class="underline">Wednesday, November 2nd</p>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">RPW Victory Offices</a></p>
							</li>
							<li>
								<p class="underline">Tuesday, November 8th</p>
								<p><b>Election Day</b></p>
								<p>Locations</p>
							</li>
							<li *ngFor="let event of events">{{event.EventName}}</li>
						</ul>
					</div>
				</div>
<!--				<button class="btn btn-md btn-color" (click)="showModal()">Submit an Event</button> -->
			</div>
		</section>
	`,
	styles:					[`
		ul {list-style: none; padding-left: 0;}
		li {margin-bottom: 15px;}
		a {color: #fff;}
		p {margin-bottom: 0;}
		.underline {text-decoration: underline;}
		section {z-index: 1000;}
		.col-md-4 {margin-bottom: 30px;}
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
		this.data.getEvents().subscribe(x => {console.log("Events: ", x);});
	}
	showModal = () => {
		this.modal.formObject = this.eventObject;
		this.modal.title = "Suggest an Event for the Women for Trump!";
		this.modal.showModal = true;
	}
}