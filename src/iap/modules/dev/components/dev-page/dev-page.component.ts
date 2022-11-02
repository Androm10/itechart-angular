import { Component, OnInit } from '@angular/core';

import { PreviewSlideComponent } from '@shared/components';
import { Slide } from '@shared/models/carousel.models';
import { Game } from '@shared/models/dto/game.model';

@Component({
	selector: 'iap-dev-page',
	templateUrl: './dev-page.component.html',
	styleUrls: ['./dev-page.component.scss'],
})
export class DevPageComponent implements OnInit {
	games: Game[] = [];
	testGameSlides: Slide<Game>[] = [];

	ngOnInit(): void {
		this.games = [
			{ id: 1, authorId: 1, name: 'Dota 2', description: 'description', price: 0, discount: 0 },
			{ id: 2, authorId: 1, name: 'CS:GO', description: 'description', price: 0, discount: 0 },
			{ id: 3, authorId: 2, name: 'Minecraft', description: 'description', price: 19.99, discount: 0 },
			{ id: 4, authorId: 3, name: 'Dead Cells', description: 'description', price: 9.99, discount: 0.25 },
			{ id: 5, authorId: 4, name: 'The Witcher', description: 'description', price: 19.99, discount: 0.75 },
			{ id: 6, authorId: 5, name: 'Day Z', description: 'description', price: 59.99, discount: 0.5 },
		];

		this.testGameSlides = this.games.map((game) => {
			return { component: PreviewSlideComponent, data: game };
		});
	}
}
