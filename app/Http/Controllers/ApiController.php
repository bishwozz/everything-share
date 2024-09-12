<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getData()
    {
        // Example data
        $data = [
            'message' => 'Hello from Laravel!',
            'items' => ['Item 1', 'Item 2', 'Item 3'],
        ];

        return response()->json($data);
    }
}
