package gandalf;
import gandalf.macros.Tools;
using gandalf.macros.Tools;
class Main {
  static function main() {

    var test = {
      a:1,
      b:2
    };
    test.a.apply_self(_ + 1  - _);
    test.multi_apply_self([a,b],_ + 1);
  }
}
