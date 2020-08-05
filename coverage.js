import http from "k6/http";
import { Rate } from "k6/metrics";
import papaparse from "./Library/papaparse.js";

export let errorRate = new Rate("errors");

const csvData = papaparse.parse(open('./sonarproject.csv'), { header: false }).data;

export default function() {
    var url = 'http://sonar.com.vn/api/measures/component?component=';
    // var project_key = csvData.name;
    console.log(("Gitlab Project")+','+("Coverage Percentage"))

    csvData.forEach((name) => {
        // console.log(name);
        let res = http.get(url + name + '&metricKeys=coverage');
        // console.log(res.body);
        console.log(res.json('component.name')+','+res.json('component.measures.'+0+'.value'));
    });

}
