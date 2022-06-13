// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["expr"], "postprocess": id},
    {"name": "expr", "symbols": ["literal"], "postprocess": id},
    {"name": "expr", "symbols": ["variable_expression"], "postprocess": id},
    {"name": "expr", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "expr", "symbols": ["additive"], "postprocess": id},
    {"name": "expr", "symbols": ["function"], "postprocess": id},
    {"name": "expr", "symbols": ["application"], "postprocess": id},
    {"name": "additive", "symbols": ["multiplicative", "_", /[+-]/, "_", "additive"], "postprocess": 
        (data) => {
            switch(data[2]){
                case "+":
                    return {type: "operation", operator: "+", left: data[0], right: data[4]}
                case "-":
                    return {type: "operation", operator: "-", left: data[0], right: data[4]}
            }
        }
        },
    {"name": "additive", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["unary_expression", "_", /[*/]/, "_", "multiplicative"], "postprocess": 
        (data) => {
            switch(data[2]){
                case "*":
                    return {type: "operation", operator: "*", left: data[0], right: data[4]}
                case "/":
                    return {type: "operation", operator: "/", left: data[0], right: data[4]}
            }
        }
        },
    {"name": "multiplicative", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": (data) => ({type: "literal", value: data[0]})},
    {"name": "unary_expression", "symbols": [{"literal":"("}, "_", "additive", "_", {"literal":")"}], "postprocess": data => data[2]},
    {"name": "function$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"b"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function", "symbols": ["function$string$1", "_", "variable", "_", {"literal":"."}, "_", "variable_expression"], "postprocess": data => ({type: "abstraction", arg: data[2][0], return: data[6] })},
    {"name": "function$string$2", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"b"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function", "symbols": ["function$string$2", "_", "variable", "_", {"literal":"."}, "_", "function"], "postprocess": data => ({type: "abstraction", arg: data[2][0], return: data[6] })},
    {"name": "variable_expression", "symbols": ["variable", "_", "operator", "_", "variable_expression"], "postprocess": (data) => ({type: "variable_expression", op: data[2], left: {type: "variable", name: data[0][0]}, right: data[4]})},
    {"name": "variable_expression", "symbols": ["number", "_", "operator", "_", "variable_expression"], "postprocess": (data) => ({type: "variable_expression", op: data[2], left: data[0][0], right: data[4]})},
    {"name": "variable_expression", "symbols": ["variable"], "postprocess": data => ({type: "variable", name: data[0]})},
    {"name": "variable_expression", "symbols": ["number"], "postprocess": data => ({type: "number", value: data[0]})},
    {"name": "operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "application", "symbols": ["function", "_", {"literal":"."}, "_", "argument"], "postprocess": (data) => ({type: "application", function: data[0], argument: data[4]})},
    {"name": "application", "symbols": ["function", "_", {"literal":"."}, "_", "arguments"], "postprocess": (data) => ({type: "application", function: data[0], arguments: data[4]})},
    {"name": "arguments", "symbols": ["argument", "_", {"literal":"."}, "_", "arguments"], "postprocess": (data) => [data[0], data[4]]},
    {"name": "arguments", "symbols": ["argument"], "postprocess": id},
    {"name": "arguments", "symbols": ["additive"], "postprocess": id},
    {"name": "argument", "symbols": ["literal"], "postprocess": id},
    {"name": "literal", "symbols": ["boolean"], "postprocess": data => ({type: "boolean", value: data[0]})},
    {"name": "literal", "symbols": ["number"], "postprocess": data => ({type: "number", value: data[0]})},
    {"name": "literal", "symbols": ["string"], "postprocess": data => ({type: "string", value: data[0]})},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess": data => Number(data[0] + "." + data[2])},
    {"name": "number", "symbols": ["digits"], "postprocess": data => Number(data[0])},
    {"name": "digits", "symbols": ["digit"], "postprocess": data => Number(data[0])},
    {"name": "digits", "symbols": ["digit", "digits"], "postprocess": data => Number(data.join(""))},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "_", "symbols": [/[ \t]/]},
    {"name": "string", "symbols": [{"literal":"\""}, "characters", {"literal":"\""}], "postprocess": data => data[1]},
    {"name": "characters", "symbols": ["character"], "postprocess": id},
    {"name": "characters", "symbols": ["character", "characters"], "postprocess": data => data[0] + data[1]},
    {"name": "character$ebnf$1", "symbols": [/[^\"]/]},
    {"name": "character$ebnf$1", "symbols": ["character$ebnf$1", /[^\"]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "character", "symbols": ["character$ebnf$1"], "postprocess": id},
    {"name": "variable$ebnf$1", "symbols": [/[A-Z]/]},
    {"name": "variable$ebnf$1", "symbols": ["variable$ebnf$1", /[A-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "variable", "symbols": ["variable$ebnf$1"], "postprocess": id}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
