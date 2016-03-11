package gandalf;
import gandalf.macros.Tools;
using gandalf.macros.Tools;
using StringTools;
class Main {
  static function main() {

    var test = {
      a:1,
      b:2,
      c:1000,
      d:"Hello",
      e:"hi"
    };

    var x = 100;
    test.a.apply_self(_ + 1  - _);
    test.multi_apply_self([a,b],_ + 1);
    test.multi_apply_self([a,b,c],_ + x);
    test.multi_apply_self([d,e],_.toUpperCase());
    trace(test);
  }
}
