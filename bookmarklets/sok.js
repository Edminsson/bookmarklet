var customSok = function(uri, sokord) {
    $.ajax({
            type: "POST",
            url: uri,
            data: JSON.stringify({ Sokord: sokord }),
            contentType: "application/json"
    });
}