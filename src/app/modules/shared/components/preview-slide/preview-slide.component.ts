import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/interfaces/dto/game';
import { SlideComponent } from '../carousel/slide.component';

@Component({
  selector: 'app-preview-slide',
  templateUrl: './preview-slide.component.html',
  styleUrls: ['./preview-slide.component.scss']
})
export class PreviewSlideComponent implements SlideComponent<Game> {
	@Input() data!: Game;

}
