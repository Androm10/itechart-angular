import { Component, Input } from '@angular/core';
import { Game } from '@shared/models/dto/game.model';

@Component({
	selector: 'iap-game-card',
	templateUrl: './game-card.component.html',
	styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
	@Input()
	game!: Game;
}
