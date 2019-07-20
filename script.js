$(document).ready(() => {
	$('#documentacao').on('click',()=>{
		//sobrepondo conteudo interno 
		$('#pagina').load('documentacao.html');
	})

	$('#suporte').on('click',()=>{
		$('#pagina').load('suporte.html');
	})
	//ao selecionar o período/competência recuperar o filtro aplicado
	$('#competencia').on('change', e=>{

		let competencia = $(e.target).val();
		//console.log(competencia);



		$.ajax({
			type:'GET',
			url:'app.php',
			data:`competencia=${competencia}`,
			dataType:'json', //o objeto deve ser entendido como json
			success:dados=>{
				$('#numeroVendas').html(dados.numeroVendas);
				$('#totalVendas').html(dados.totalVendas);
			},
			error:erro=>{console.log(erro)}
		})
		//método, url, dados,sucesso,erro
	})
})