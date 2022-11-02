import { Component, Input, OnDestroy, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

import { Slide, SlideComponent } from '@shared/models/carousel.models';

@Component({
	selector: 'iap-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
	@ViewChild('slideHost', { read: ViewContainerRef })
	slideHostView!: ViewContainerRef;

	@Input()
	slides: Slide<any>[] = [];

	currentSlideIndex = 0;

	interval: number | undefined;

	// TODO: ngOnChanges  (and ngAfterInit)
	ngAfterViewInit(): void {
		// TODO: Fix "changes after check" error by another method
		window.setTimeout(() => this.selectSlide(this.currentSlideIndex), 0);
		this.startSlideshow();
	}

	ngOnDestroy() {
		window.clearInterval(this.interval);
	}

	onNextButtonClick() {
		this.restartSlideshowTimer();

		this.selectSlide(this.currentSlideIndex + 1);
	}

	onPrevButtonClick() {
		this.restartSlideshowTimer();

		if (this.currentSlideIndex > 0) {
			this.selectSlide(this.currentSlideIndex - 1);
		} else {
			this.selectSlide(this.slides.length - 1);
		}
	}

	selectSlide(number: number) {
		this.currentSlideIndex = number % this.slides.length;
		const slide = this.slides[this.currentSlideIndex];

		this.slideHostView.clear();

		const componentRef = this.slideHostView.createComponent<SlideComponent<any>>(slide.component);
		componentRef.instance.data = slide.data;
	}

	isCurrentSlideIndex(number: number) {
		return number === this.currentSlideIndex;
	}

	private startSlideshow() {
		this.interval = window.setInterval(() => {
			this.selectSlide(this.currentSlideIndex + 1);
		}, 5000);
	}

	private restartSlideshowTimer() {
		window.clearInterval(this.interval);
		this.startSlideshow();
	}
}
