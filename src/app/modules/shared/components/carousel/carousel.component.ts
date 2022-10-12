import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Slide } from './slide';
import { SlideComponent } from './slide.component';
import { SlideDirective } from './slide.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
	@Input() slides: Slide<any>[] = [];

	currentSlideIndex = 0;

	@ViewChild(SlideDirective, {static: true}) slideHost!: SlideDirective;

	interval: NodeJS.Timeout | undefined;

	ngOnInit(): void {
		this.selectSlide(this.currentSlideIndex);
		this.startSlideshow();
	}

	ngOnDestroy() {
		clearInterval(this.interval);
	}

	onNextButtonClick() {
		this.restartSlideshowTimer();

		this.selectSlide(this.currentSlideIndex + 1);
	}

	onPrevButtonClick() {
		this.restartSlideshowTimer();

		if(this.currentSlideIndex > 0)
			this.selectSlide(this.currentSlideIndex - 1);
		else
			this.selectSlide(this.slides.length - 1);
	}

	selectSlide(number: number) {
		this.currentSlideIndex = number % this.slides.length;
		const slide = this.slides[this.currentSlideIndex];

		const viewContainerRef = this.slideHost.viewContainerRef;
		viewContainerRef.clear();

		const componentRef = viewContainerRef.createComponent<SlideComponent<any>>(slide.component);
		componentRef.instance.data = slide.data;
	}

	private startSlideshow() {
		this.interval = setInterval(() => {
			this.selectSlide((this.currentSlideIndex + 1) % this.slides.length);
		}, 500000);
	}

	private restartSlideshowTimer() {
		clearInterval(this.interval);
		this.startSlideshow();
	}
}
