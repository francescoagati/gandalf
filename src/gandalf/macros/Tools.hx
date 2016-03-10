package gandalf.macros;

#if macro
  import haxe.macro.Expr;
  using tink.MacroApi;
#end


class Tools {

  public static macro function multi_apply_self<T>(obj:haxe.macro.Expr,fields:haxe.macro.Expr,expr:haxe.macro.Expr) {

    var properties = fields.toString();
    trace(haxe.Json.stringify(properties));
    return macro null;
  }

  public static macro function apply_self<T>(obj:haxe.macro.Expr,expr:haxe.macro.Expr) {

    var new_expr = expr.substitute({
      "_":macro $obj
    });
    return macro $obj = $new_expr;
  }


}
