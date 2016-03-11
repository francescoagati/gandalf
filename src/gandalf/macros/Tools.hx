package gandalf.macros;
import gandalf.macros.Tools.Helpers.*;
#if macro
  import haxe.macro.Expr;
  using tink.MacroApi;
#end

using StringTools;

class Helpers {
  public static inline function clean_properties(s:String) {
    return s.replace("[","").replace("]","").split(",").map(function(_) return _.trim());
  }
}

class Tools {

  public static macro function multi_apply_self<T>(obj:haxe.macro.Expr,fields:haxe.macro.Expr,expr:haxe.macro.Expr) {

    var properties = clean_properties(fields.toString());
    var exprs = [for (prop in properties) macro gandalf.macros.Tools.apply_self($obj.$prop,$expr)];
    return macro $b{exprs};
  }

  public static macro function apply_self<T>(obj:haxe.macro.Expr,expr:haxe.macro.Expr) {

    var new_expr = expr.substitute({
      "_":macro $obj
    });
    return macro $obj = $new_expr;
  }


}
