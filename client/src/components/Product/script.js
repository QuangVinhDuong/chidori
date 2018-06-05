import $ from 'jquery';

export function bidBoxWork() {
    
    $(document).ready(function() {
        $("[data-value]").on("click", function() {
            var value = $(this).data("value");
            var input = $("#bid-value");
            var step = Number(input.data("step"));
            var min = Number(input.data("min"));
            var val = Number(input.val());

            val = value * step + val;

            if (val < min) {
                val = min;
            }
            input.val(val);
        });
    });
}