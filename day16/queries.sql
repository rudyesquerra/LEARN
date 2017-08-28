-- Of the smallest 10 countries, which has the biggest per capita gnp?

WITH smallest_countries AS(
SELECT
	*
FROM
	country
WHERE
population > 0 AND gnp > 0
ORDER BY
population ASC,
surfacearea
LIMIT 10
)
SELECT
name,
gnp,
population,
gnp / population AS per_capita_gnp

FROM
smallest_countries

ORDER BY
per_capita_gnp DESC



-- What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest?

WITH smallest_countries AS(
SELECT
	*
FROM
	country
WHERE
population > 0 AND gnp > 0
ORDER BY
population DESC,
surfacearea
LIMIT 10
)
SELECT
sum(smallest_countries.surfacearea)

FROM
smallest_countries

-- What are the forms of government for the top ten countries by surface area?

WITH top_ten AS (
SELECT
name, surfacearea, governmentform

FROM
country

ORDER BY
surfacearea DESC
LIMIT 10)

SELECT
governmentform,
count(top_ten.governmentform)

FROM
top_ten

GROUP BY
governmentform


-- Which countries are in the top 5% in terms of area?
SELECT
name,
surfacearea

FROM
country

ORDER BY
surfacearea DESC

LIMIT 0.05* (SELECT count(*)
FROM
country)

-- What is the 3rd most common language spoken?

WITH newquery AS(
SELECT
c.name as country,
language,
population,
percentage,
c.population*cl.percentage AS langpop

FROM
country c JOIN
countrylanguage cl ON c.code = cl.countrycode

ORDER BY
langpop DESC)

SELECT
language,
sum(newquery.langpop) AS totalpop
FROM
newquery

GROUP BY
language

ORDER BY
totalpop DESC
