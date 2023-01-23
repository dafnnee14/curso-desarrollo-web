-- Escribir una consulta SQL que muestre las columnas Id, Name, Population de la tabla city y que limite los resultados a 10 filas.
SELECT id , name, population FROM world.city LIMIT 10;

-- Escribir una consulta SQL que muestre las columnas Id, Name, Population de la tabla city y que limite los resultados a las filas 31-40.
SELECT id, name, population FROM world.city LIMIT 30,10;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city que tengan una población mayor a 2000000.
SELECT name, population FROM world.city WHERE population > 2000000;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city cuyo nombre empiece por Be.
SELECT name FROM world.city WHERE name LIKE 'Be%';
-- en 'BE%' el % indica un número indeterminado de carácteres
SELECT name FROM world.city WHERE name LIKE 'Be%';
SELECT name  FROM world.city WHERE name LIKE '%ao';

-- Escribir una consulta SQL que muestre las ciudades de la tabla city cuya población se encuentre entre 500000-1000000.
SELECT name, population FROM world.city WHERE population BETWEEN 500000 AND 1000000;

-- Escribir una consulta SQL que muestre las ciudades de la tabla city ordenadas por nombre.
SELECT name, population FROM world.city ORDER BY name;

-- Escribir una consulta SQL que muestre la ciudad con la menor población.
 SELECT name, population FROM world.city ORDER BY population LIMIT 1;  
-- Escribir una consulta SQL que muestre la ciudad con la mayor población.
SELECT name, population FROM world.city ORDER BY population DESC LIMIT 1; 

-- Escribir una consulta SQL que muestre la lista de todos los idiomas hablados en la región del Caribe.
SELECT DISTINCT(language), region FROM world.countrylanguage INNER JOIN world.country ON country.code = countrylanguage.countrycode 
WHERE region = 'Caribbean';
-- DISTINCT(nombre_de_columna) es un método para que los resultados no se repitan 

-- Escribir una consulta SQL que muestre la capital de España.
SELECT country.name AS país, city.name AS Capital FROM world.country
JOIN world.city ON country.capital = city.id
WHERE country.name = 'Spain';
-- AS índica un alías para la columna 

-- Escribir una consulta SQL que muestre el país con mayor esperanza de vida.
SELECT name, lifeExpectancy FROM world.country
ORDER BY  lifeExpectancy DESC LIMIT 1; 

-- Escribir una consulta SQL que muestre todas las ciudades de Europa.
SELECT city.name, continent FROM world.country
JOIN world.city ON country.code = city.countrycode
WHERE continent = 'Europe';
SELECT city.name, continent FROM world.country
JOIN world.city ON country.code = city.countrycode
WHERE continent = 'South America'
AND city.population > 500000;

-- Escribir una consulta SQL que muestre la ciudad más poblada de la tabla city.
SELECT name, population FROM world.city
WHERE city = 'Kabul'
AND city.population = 1780000;

-- Escribir una consulta SQL que muestre la ciudad menos poblada de la tabla city.
SELECT name, population FROM world.city
WHERE city = 'Taman'
AND city.population = 107000;

-- Escribir una consulta SQL que calcule el número de resultados de la tabla city.
SELECT COUNT(*) FROM world.city;

-- Escribir una consulta SQL que calcule el número de ciudades de China en la tabla city.
SELECT COUNT(city.name) FROM world.city
JOIN world.city ON country.code = city.countrycode
WHERE country.name = 'China';

-- SELECT DISTINCT
-- Se usa cuando tenemos que mostrar datos duplicados de una tabla
SELECT language, continent FROM world.country c 
JOIN world.countrylanguage l ON c.code = l.CountryCode
WHERE continent NOT IN ('South America', 'Asia')
ORDER BY Continent, language DESC;

-- MIN() Y MAX()
-- Funciones que recogen el minimo y máximo valor de una columna respectivamente
SELECT MIN(population) FROM world.city;
SELECT MAX(population) FROM world.city;

-- COUNT(), AVG(), SUM()
-- COUNT() retorna el número de registros que coinciden con la query
SELECT COUNT(*) FROM world.city
WHERE population > 1500000;

-- AVG retorna el promedio de los valores de una columna
SELECT AVG(city.population) 'Media de habitantes de las ciudades de españa' FROM world.city 
JOIN world.country ON country.code = city.CountryCode
WHERE country.name ='spain';

-- SUM() Retorna la suma de los valores de una columna 
SELECT SUM(city.population) 'Total de habitantes de las ciudades de españa, de la base de datos' FROM world.city
JOIN world.country ON country.code = city.CountryCode
WHERE country.name ='spain';

-- IN Y NOT INSERT
-- Se usa para indicar varias opciones para una columna en una claúsula WHERE
SELECT language, name FROM world.country c 
JOIN world.countrylanguage l ON c.code = l.countrycode
 WHERE name IN ('germany', 'france', 'belgium');
 
 -- BETWEEN 
 -- Se usa para buscar resultados que estén contenidos entre dos valores
 SELECT name, population FROM world.city
 WHERE population BETWEEN 250000 AND 500000;
 -- OR population NOT BETWEEN 75000 AND 850000;
 
 -- ALIAS 
 SELECT CONCAT(nombre, ' ' , apellido1) AS 'nombre completo' FROM academia.alumnos;
 
 -- GROUP BY 
 SELECT COUNT(city.name), country.name FROM world.city
 JOIN world.country ON city.countrycode = country.code
 WHERE continent = 'Africa'
 GROUP BY country.name;