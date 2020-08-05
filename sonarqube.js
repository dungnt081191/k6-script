import http from "k6/http";

export default function() {
    var url = 'http://sonar.com.vn/api/components/search?qualifiers=TRK';
    let res = http.get(url);
    for(let i = 0, l = res.json('paging.total'); i < l; i++) {
      var obj = res.json('components.'+i+'.key');
      console.log(obj);
      // console.log(res.json('components.'+i+'.name')+','+res.json('components.'+i+'.key'));
  }
}