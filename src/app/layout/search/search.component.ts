import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PolicyInfo } from "../../model/policyInfo";
import { POLICYINFOS } from '../../mock-policyInfo';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [routerTransition()]
})
export class SearchComponent implements OnInit {


    filteredItems: PolicyInfo[];
    pages: number = 0;
    pageSize: number = 7;
    pageNumber: number = 0;
    currentIndex: number = 1;
    items: PolicyInfo[];
    pagesIndex: Array<number>;
    pageStart: number = 1;
    searchParam: PolicyInfo = { pol_num: "", pol_la_name: " ", pol_Type: "", pol_sum_insured: "", pol_owner_name: "", pol_owner_id: "", pol_channel: "" };

    constructor() {
        this.filteredItems = POLICYINFOS;
    }

    ngOnInit() {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 7;

        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }

        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }

        this.refreshItems();
    }

    Search(): void {
        this.filteredItems = POLICYINFOS;
        if(this.searchParam.pol_num != ""){
            this.filteredItems = this.filteredItems.filter(object =>  object.pol_num == this.searchParam.pol_num);
        }
        if(this.searchParam.pol_channel != ""){
            this.filteredItems = this.filteredItems.filter(object =>  object.pol_channel == this.searchParam.pol_channel);
        }
        if(this.searchParam.pol_owner_id != ""){
            this.filteredItems = this.filteredItems.filter(object =>  object.pol_owner_id == this.searchParam.pol_owner_id);
        }
        if(this.searchParam.pol_owner_name != ""){
            this.filteredItems = this.filteredItems.filter(object =>  object.pol_owner_name == this.searchParam.pol_owner_name);
        }
        console.log(this.filteredItems);
        this.ngOnInit();
    }

    fillArray(): any {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    }
    refreshItems() {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    }
    prevPage() {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    }
    nextPage() {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }

        this.refreshItems();
    }
    setPage(index: number) {
        this.currentIndex = index;
        this.refreshItems();
    }

}
