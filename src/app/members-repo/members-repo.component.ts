import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members-repo',
  templateUrl: './members-repo.component.html',
  styleUrls: ['./members-repo.component.css'],
  providers: [MemberService]
})
export class MembersRepoComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  header: string ="";
  formShowing:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private memberService: MemberService) {}

  showHeading (url){
    if (url == "/Collegiate"){
      this.header= "Collegiate Members";
    }else if(url == "/Chaperone"){
      this.header= "Chaperone Members";
    }else if(url == "/Members")
    this.header = "All Members";
  }

  ngOnInit() {
    this.showHeading(this.currentRoute);
    this.members = this.memberService.getMembers();
  }

  showForm(){
    this.formShowing=true;
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
