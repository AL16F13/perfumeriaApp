//JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnenlistar').on('tap',function(){
		$.ajax({
			type:"POST",
			url:"http://192.168.1.184/perfumeria/buscartodo.php",
			data:"",
			error: function(){alert("Error en la conexion");},
			success: function(respuesta){var producto = JSON.parse(respuesta);
			 $('#contenido').empty();
			for(var $x=0; $x<producto.perfumes.length; $x++)
			{
				$('#contenido').append('<div><div style=" display:inline-block"><div ><img src="http://192.168.1.184/perfumeria/recursos/imagenes/fotos/'+producto.perfumes[$x].IdPerfume+'"></div><div ><p>Clave: </p>'+ producto.perfumes[$x].IdPerfume +'</div></div><div style="display: inline-block"><div ><p>Nombre: </p>'+ producto.perfumes[$x].NombrePerfume +'</div><div ><p>Marca: </p>'+ producto.perfumes[$x].Marca +'</div><div ><p>Contenido: </p>'+ producto.perfumes[$x].Contenido +'</div><div ><p>Precio de Venta: $</p>'+ producto.perfumes[$x].PrecioVenta +'</div></div></div><br><hr>');
			}
			$(':mobile-pagecontainer').pagecontainer('change','#Enlistar',{
				transition: 'pop'});
				
			   }
				
				
				
		});
	});
				
			
	
	
	
}); 
});