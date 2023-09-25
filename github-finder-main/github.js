class Github {
  constructor(){
    this.client_id = '5547cb6dcac49cfb52a6';
    this.client_secret = '2ac15d50fc02aca9526745a6c179132256a8e51b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sor=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos
    } 
  }
}