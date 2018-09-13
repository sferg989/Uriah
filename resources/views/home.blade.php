@extends('layouts.app')

@section('content')

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@progress/kendo-theme-default@latest/dist/all.css" crossorigin="anonymous" />
    <style>
        body { font-family: "RobotoRegular",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; }
        my-app { display: block; width: 100%; min-height: 80px; box-sizing: border-box; padding: 30px; }
        my-app > .k-icon.k-i-loading { font-size: 64px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .example-wrapper { min-height: 280px; align-content: flex-start; }
        .example-wrapper p, .example-col p { margin: 0 0 10px; }
        .example-wrapper p:first-child, .example-col p:first-child { margin-top: 0; }
        .example-col { display: inline-block; vertical-align: top; padding-right: 20px; padding-bottom: 20px; }
        .example-config { margin: 0 0 20px; padding: 20px; background-color: rgba(0,0,0,.03); border: 1px solid rgba(0,0,0,.08); }
        .event-log { margin: 0; padding: 0; max-height: 100px; overflow-y: auto; list-style-type: none; border: 1px solid rgba(0,0,0,.08); background-color: #fff; }
        .event-log li {margin: 0; padding: .3em; line-height: 1.2em; border-bottom: 1px solid rgba(0,0,0,.08); }
        .event-log li:last-child { margin-bottom: -1px;}
    </style>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div id="root"></div>
    <my-app>
        <span class="k-icon k-i-loading" style="color: #ff6358"></span>
    </my-app>

    <script src="{{mix('js/app.js')}}" ></script>

</div>

@endsection

<!doctype html>

