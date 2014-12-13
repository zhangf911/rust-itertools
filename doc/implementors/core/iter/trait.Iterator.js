(function() {var implementors = {};
implementors['itertools'] = ["<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;, J: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt; for <a class='struct' href='itertools/struct.Interleave.html' title='itertools::Interleave'>Interleave</a>&lt;I, J&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, B, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;B&gt; for <a class='struct' href='itertools/struct.FnMap.html' title='itertools::FnMap'>FnMap</a>&lt;A, B, I&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt; for <a class='struct' href='itertools/struct.PutBack.html' title='itertools::PutBack'>PutBack</a>&lt;A, I&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;, B, J: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;B&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B)</a>&gt; for <a class='struct' href='itertools/struct.Product.html' title='itertools::Product'>Product</a>&lt;A, I, J&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a>, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt; for <a class='struct' href='itertools/struct.Dedup.html' title='itertools::Dedup'>Dedup</a>&lt;A, I&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, B, F: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(&amp;mut I,)</a>, <a class='enum' href='http://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;B&gt;&gt;, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;B&gt; for <a class='struct' href='itertools/struct.Batching.html' title='itertools::Batching'>Batching</a>&lt;I, F&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt; for <a class='struct' href='itertools/struct.Intersperse.html' title='itertools::Intersperse'>Intersperse</a>&lt;A, I&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, B, F: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A,)</a>, B&gt;, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;B&gt; for <a class='struct' href='itertools/struct.MapMut.html' title='itertools::MapMut'>MapMut</a>&lt;F, I&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;&amp;'a A&gt; for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;'a, A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;&amp;'a mut A&gt; for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;","<a class='stability Unmarked' title='No stability level'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.uint.html'>uint</a>&gt; for <a class='struct' href='itertools/struct.Times.html' title='itertools::Times'>Times</a>","<a class='stability Unmarked' title='No stability level'></a>impl&lt;A, B, T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;A&gt;, U: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;B&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;<a class='enum' href='itertools/enum.EitherOrBoth.html' title='itertools::EitherOrBoth'>EitherOrBoth</a>&lt;A, B&gt;&gt; for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T, U&gt;","<a class='stability Unmarked' title='No stability level'></a>impl&lt;X, Y, T: AppendTuple&lt;X, Y&gt;, I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(T, X)</a>&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Y&gt; for <a class='struct' href='itertools/struct.FlatTuples.html' title='itertools::FlatTuples'>FlatTuples</a>&lt;I&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()