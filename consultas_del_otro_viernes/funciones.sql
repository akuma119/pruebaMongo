-- consultas basicas
-- la mayoria ya las conocen
select (columnas) from (tabla) where (condicion)
insert into tabla (columna1, columna2) values (valor1, valor2 ...)
update tabla set columa=valor where (condicion)

-- count: cuenta
select count(columna) from tabla where (condicion)
select count(id_prod) from desktop

-- sum: suma
-- supongamos que queremos comprar notebooks, con al menos 8gb de ram
-- cuanto saldria comprar una de cada una, que cumpla con dicha condicion
select precio from notebook where ram>=8

-- max min: maximo y el minimo valor
select max(precio) from desktop

-- clausula order by
select * from desktop order by precio

-- avg: promedio
select avg(precio) from notebook

-- redondeo
-- floor() (piso); ceil() (techo); round() 0-4 abajo, 5-9 arriba
--#TODO: ver el round()

-- like: selecciona tal que cumplan con contener la cadena %string%
select columnas from tabla where columna like '%string%'

-- group by
select columna1, columna2 from tabla group by columna1

-- in
-- select * from celular where marca='lg' or marca= 'samsung'
select * from celular where marca in ('lg','samsung')

-- concat()
-- permite concatenar valores
