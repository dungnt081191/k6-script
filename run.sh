echo "sonarqube.js"
k6 run sonarqube.js --quiet --console-output sonarproject.csv

echo "sed"
sed 's/^[^ ]* //' sonarproject.csv > sonarproject-sed.csv
rm sonarproject.csv

echo "sed"
sed 's/ *$//' sonarproject-sed.csv > sonarproject.csv
rm sonarproject-sed.csv

echo "coverage"
sleep 1
k6 run coverage.js --quiet --console-output coverageraw.csv
rm sonarproject.csv

echo "sed"
sed 's/^[^ ]* //' coverageraw.csv > coverageraw-sed.csv
rm coverageraw.csv

echo "sed"
sed 's/ *$//' coverageraw-sed.csv > coverage-$(date +"%FT%H%M").csv
rm coverageraw-sed.csv