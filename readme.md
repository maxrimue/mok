# mok

> A simple online mocking HTTP request mocking solution

## Base URL

```
https://mok.now.sh/
```

Request example:

```bash
wget -q -O - "$@" "mok.now.sh/?response={\"hello\": \"world\"}&responseType=json"
```

## Paths

You can use any path you like, the response will not be impacted by it. For example, you can do:

```
https://mok.now.sh/hello/there/
```

## Options

Options are impacting the response by the server. You use options by concatenating them to the base url, like so:

```bash
https://mok.now.sh/?optionKey=value&anotherOptionKey=anotherValue
```

Here is a list of available options.

### Wait

> Key: `wait`  
> Value: `Number`  
> Description: `Amount of milliseconds to wait before response is sent.`

### Response

> Key: `response`  
> Value: `String`  
> Description: `Response to be sent back.`

### ResponseType

> Key: `responseType`  
> Value: `"string" OR "json"`  
> Description: `Modifies the type of response the server will send. Setting 'json' will parse 'response' as JSON and send it back with the right content type.`

### StatusCode

> Key: `statusCode`  
> Value: `Number`  
> Description: `Status code to send back. Example could be '404' for simulating a "not found" error.`
