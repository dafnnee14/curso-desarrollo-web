use empleados_departamentos;
-- 1. Obtener los datos completos de los empleados.
select *
FROM empleados;
-- 2. Obtener los datos completos de los departamentos.
select *
FROM departamentos;
-- 3. Obtener los datos de los empleados con cargo ‘Secretaria’.
select *
FROM empleados
WHERE LOWER(cargoE)='secretaria';
-- 4. Obtener el nombre y salario de los empleados.
select nomemp, salemp 
from empleados;
-- 5. Obtener los datos de los empleados vendedores, ordenado por nombre.
select * 
from empleados 
where lower(cargoE)='vendedor'
order by nomEmp asc;
-- 6. Listar el nombre de los departamentos.
select distinct nombreDPto 
from departamentos;
-- 7. Obtener el nombre y cargo de todos los empleados, ordenado por salario.
select nomEmp, cargoE, salemp 
from empleados 
order by salemp;
-- 8. Listar los salarios y comisiones de los empleados del departamento 2000, ordenado por comisión.
select salemp, comisione 
from empleados 
order by comisionE;
-- 9. Listar todas las comisiones.
select distinct comisione 
from empleados;
-- 10. Obtener el valor total a pagar que resulta de sumar a los empleados del departamento 3000 una bonificación de 500.000, en orden alfabético del empleado.
select nomemp, salemp, (salemp+500000) as 'pago estimado'
from empleados 
where codDepto = '3000'
order by nomemp;
-- 11. Obtener la lista de los empleados que ganan una comisión superior a su sueldo.
select nomemp,salemp,comisione 
from empleados
where comisionE > salEmp;
-- 12. Listar los empleados cuya comisión es menor o igual que el 30% de su sueldo.
select nomemp,salemp,comisione 
from empleados
where comisionE <= (salEmp*0.3);
-- 13.Elabore un listado donde para cada fila, figure ‘Nombre’ y ‘Cargo’ antes del valor respectivo para cada empleado.
select nomemp as 'Nombre', cargoe as 'Cargo'
from empleados;
-- 14. Hallar el salario y la comisión de aquellos empleados cuyo número de documento de identidad es superior al ‘19.709.802’.
select nDIEmp,salemp,comisione 
from empleados
where nDIEmp > '19.709.802';
-- 15. Muestra los empleados cuyo nombre empiece entre las letras J y Z (rango).
select nomemp, cargoe
from empleados
where lower(nomemp) > 'j' and lower(nomemp) < 'z'
order by nomemp;
-- 16. Listar el salario, la comisión, el salario total (salario + comisión), documento de identidad del empleado y nombre, de aquellos empleados que tienen comisión superior a 1.000.000, ordenar el informe por el número del documento de identidad
select salemp,
            comisione,
            (salemp + comisione) as 'Salario total', 
            ndiemp
from empleados
where comisione > 1000000
order by ndiemp;
-- 17. Obtener un listado similar al anterior, pero de aquellos empleados que NO tienen comisión
select salemp,
            comisione,
            (salemp + comisione) as 'Salario total',
            ndiemp 
from empleados 
where comisione = 0 
order by ndiemp;
-- 18. Hallar los empleados cuyo nombre no contiene la cadena «MA»
select nomEmp 
from empleados 
where lower(nomEmp) not like '%ma%';
-- 19. Obtener los nombres de los departamentos que no sean “Ventas” ni “Investigación” NI 'MANTENIMIENTO'.
select nombreDpto 
from departamentos 
where lower(nombreDpto) not in ('ventas', 'investigación', 'mantenimiento');
-- 20. Obtener el nombre y el departamento de los empleados con cargo ‘Secretaria’ o ‘Vendedor’, que no trabajan en el departamento de “PRODUCCION”, cuyo salario es superior a $1.000.000, ordenados por fecha de incorporación.
select e.nomemp, d.nombreDpto 
from empleados e, departamentos d 
where e.codDepto=d.codDepto and (lower(e.cargoE)='secretaria' or lower(e.cargoE)='vendedor')
and lower(d.nombreDpto)<>'produccción' and e.salEmp > 1000000 
order by e.fecIncorporacion;
-- 21. Obtener información de los empleados cuyo nombre tiene exactamente 11 caracteres.
select * 
from empleados 
where char_length(nomemp) = 11;
-- 22. Obtener información de los empleados cuyo nombre tiene al menos 11 caracteres.
select * 
from empleados 
where char_length(nomemp) < 11;
-- 23. Listar los datos de los empleados cuyo nombre inicia por la letra ‘M’, su salario es mayor a $800.000 o reciben comisión y trabajan para el departamento de ‘VENTAS’
select e.nomEmp, d.nombreDpto, e.salEmp 
from empleados e, departamentos d 
where e.codDepto=d.codDepto and lower(e.nomEmp) like 'm%' and (e.salEmp > 800000 or e.comisionE>0) 
and lower(d.nombreDpto)<>'ventas';
-- 24. Obtener los nombres, salarios y comisiones de los empleados que reciben un salario situado entre la mitad de la comisión la propia comisión.
select nomEmp, salEmp, comisionE 
from empleados 
where salEmp between (comisionE/2) and comisionE;
-- 25. Mostrar el salario más alto de la empresa.
select nomemp,
            max(salEmp) as 'Salario mayor'
from empleados;
-- 26. Mostrar cada una de las comisiones y el número de empleados que las reciben. Solo si tiene comisión.
select comisionE, count(*) as 'Num empleados'
from empleados group by comisionE having comisionE > 0;
-- 27. Mostrar el nombre del último empleado de la lista por orden alfabético.
select max(nomemp) as 'Mayor alfabeticamente'
from empleados;
-- 28. Hallar el salario más alto, el más bajo y la diferencia entre ellos.
select max(salemp) as 'Salario mayor', min(salemp) as 'Salario menor', max(salemp) - min(salemp) as 'Diferencia' 
from empleados;
-- 29. Mostrar el número de empleados de sexo femenino y de sexo masculino, por departamento.
select codDepto, sexemp, count(*) 
from empleados 
group by codDepto, sexemp;
-- 30. Hallar el salario promedio por departamento.
select codDepto, avg(salemp) 
from empleados 
group by codDepto;
-- 31. Mostrar la lista de los empleados cuyo salario es mayor o igual que el promedio de la empresa. Ordenarlo por departamento.
select nDIEmp, salEmp 
from empleados 
where salemp >= (select avg(salemp) from empleados);
-- 32. Hallar los departamentos que tienen más de tres empleados. Mostrar el número de empleados de esos departamentos.
select d.codDepto, d.nombreDpto, count(*) as 'Num empleados'
from departamentos d, empleados e 
where d.codDepto=e.codDepto 
group by d.codDepto 
having count(*) >= 3;
-- 33. Mostrar el código y nombre de cada jefe, junto al número de empleados que dirige. Solo los que tengan mas de dos empleados (2 incluido).
SELECT jefeID ID_jefe, (SELECT nomEmp FROM empleados WHERE nDIEemp = ID_jefe) 'Nombre de jefe', COUNT(*) 'Número de empleados' FROM empleados
      GROUP BY jefeID
      HAVING COUNT(*) >= 2;
      
      SELECT jefeID, COUNT(*) 'Número de empleados' FROM empleados
			GROUP BY jefeID
            HAVING COUNT(*) >= 2;
-- 34. Hallar los departamentos que no tienen empleados.
select d.codDepto, d.nombreDpto 
from departamentos d, empleados e 
where d.codDepto=e.codDepto 
group by d.codDepto 
having count(*) = 0;
-- 35. Mostrar el nombre del departamento cuya suma de salarios sea la más alta, indicando el valor de la suma.
select d.nombreDpto, sum(e.salEmp) 
from departamentos d, empleados e 
where d.codDepto=e.codDepto 
group by d.nombreDpto 
order by sum(e.salEmp) desc
limit 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
   