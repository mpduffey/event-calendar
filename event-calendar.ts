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
								<h5>Saturday, September 17th</h5>
								<hr>
								<p><b>Constitution Day Celebration</b></p>
								<p>Locations: La Crosse, Outagamie, Waukesha, Shawano, Wausau, West Bend, Milwaukee, and Dane County Victory Centers</p>
								<p>Contact: Charlotte Rasmussen, <a href="mailto:charlotter@ceas.coop">charlotter@ceas.coop</a>, (715) 551-9724</p>
								<br>
								<p><b>Super Saturday</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">All RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Wednesday, September 21st</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Monday, September 26th</h5>
								<hr>
								<p><b>Milwaukee Debate Viewing Party</b></p>
								<p>6:30pm-9:30pm</p>
								<p> Amelia’s - 724 East Layton Avenue, Milwaukee, WI</p>
								<p>Contact Darlene Wink: (414) 553-8551</p>
							</li>
							<li>
								<h5>Wednesday, September 28th</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h3>October</h3>
						<ul>
							<li>
								<h5>Wednesday, October 5th</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Wednesday, October 12th</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Wednesday, October 19th</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Wednesday, October 26th</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h3>November</h3>
						<ul>
							<li>
								<h5>Wednesday, November 2nd</h5>
								<hr>
								<p><b>Ladies' Night at the Victory Center</b></p>
								<p><a href="https://www.wisgop.org/volunteer/" target="_blank">Select RPW Victory Offices</a></p>
							</li>
							<li>
								<h5>Tuesday, November 8th</h5>
								<hr>
								<p><b>Election Day</b></p>
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
		h5 {margin-bottom: 0; margin-top: 25px;}
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