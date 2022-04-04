import { Component } from '@angular/core';
import { HelperComponent } from '../helper.component'

@Component({
  selector: 'app-counter-component',
  templateUrl: './search.component.html'

})
export class SearchComponent {
  public result = null;
  public searchQuery = "";
  public searchResults = [];
  public people = [];
  public keyphrases = [];
  public locations = [];
  public organizations = [];
  public searchIndexes = [];
  public selectedIndex;
  public answer;
  
 
  constructor(public helper: HelperComponent) {
    this.getSearchIndex();
  }

  public async getSearchResults(apiPath) {

    this.result = "fetching...";
    var url = apiPath + "/" + (this.selectedIndex != "" ? this.selectedIndex.name : this.selectedIndex);

    this.result = await this.helper.postToAPi(url , this.searchQuery);
    this.searchResults = JSON.parse(this.result).results.searchResults.value;
    this.answer = JSON.parse(this.result).results.searchResults['@search.answers'].length == 0 ? '' : JSON.parse(this.result).results.searchResults['@search.answers'][0].text;
    
    this.locations = JSON.parse(this.result).results.locations
    this.keyphrases = JSON.parse(this.result).results.keyphrases
    this.people = JSON.parse(this.result).results.people
    this.organizations = JSON.parse(this.result).results.organizations
    //console.log(this.searchResults['@search.captions'][0].text);
  }

  public async getSearchResultsFaceted(apiPath) {

    this.result = "fetching...";
    var url = "search/" + (this.selectedIndex != "" ? this.selectedIndex.name : this.selectedIndex) + "/" + apiPath;

    this.result = await this.helper.postToAPi(url , this.searchQuery);
    this.searchResults = JSON.parse(this.result).results.searchResults.value
    
    this.locations = JSON.parse(this.result).results.locations
    this.keyphrases = JSON.parse(this.result).results.keyphrases
    this.people = JSON.parse(this.result).results.people
    this.organizations = JSON.parse(this.result).results.organizations
    //console.log(this.searchResults['@search.captions'][0].text);
  }

  public async getSearchIndex() {

    this.result = "fetching...";
    this.result = await this.helper.callApi("indexes");
    this.searchIndexes = JSON.parse(this.result).results.value;
    this.selectedIndex = this.searchIndexes[0];
  }

  public decode(value) {
    try {
      return atob(value['metadata_storage_path']);
    }
    catch (e) {}
  }
  

}
