import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Posts } from './post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnChanges {
  postList: Posts[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ok', changes);
  }

  ngOnInit(): void {
    this.getReceipe();
  }

  checking(value: any) {
    console.log(value);
  }

  createReceipe({ title, description }: Posts) {
    this.http
      .post('http://localhost:3000/posts', { title, description })
      .subscribe((data) => this.ngOnInit());
  }

  deleteReceipe(id: number) {
    this.http.delete('http://localhost:3000/posts/' + id).subscribe((data) => {
      this.ngOnInit();
      // alert('Post Deleted');
    });
  }

  editReceipe(id: number) {}

  getReceipe() {
    this.http.get('http://localhost:3000/posts').subscribe((data: any) => {
      this.postList = data;
    });
  }
}
