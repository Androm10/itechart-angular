import { Component, Input } from '@angular/core';

import { SlideComponent } from '@shared/models/carousel.models';
import { Game } from '@shared/models/entities/game.entity';

@Component({
	selector: 'iap-preview-slide',
	templateUrl: './preview-slide.component.html',
	styleUrls: ['./preview-slide.component.scss'],
})
export class PreviewSlideComponent implements SlideComponent<Game> {
	@Input() data!: Game;
}
