import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo.comment';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-detail.component.css'],
})
export class PhotoDetailComponent implements OnInit {
  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoid'];
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
