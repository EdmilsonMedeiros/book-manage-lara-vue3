<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Meu Projeto')</title>
    
    <!-- Inclua aqui seus arquivos CSS -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <!-- Inclua aqui seus scripts JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Bootstrap CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

</head>
<body>
    <main>
        <!-- Conteúdo principal que será substituído pelas views filhas -->
        @yield('content')
    </main>

    <footer>
        <!-- Rodapé do site -->
    </footer>

    <!-- Bootstrap JS via CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
</body>
</html>