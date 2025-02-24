import Types "types";
import Array "mo:base/Array";
import Text "mo:base/Text";

module {

    public class Contest(_args: Text) {

        var items: [Types.Contest] = [];
        
        public func lists() : [Types.Contest] {
            return items;
        };

        public func create(id: Nat32, title: Text, describe: Text) : async [Types.Contest] {
            let obj: Types.Contest = {
                id = id; 
                title = title;
                describe = describe;
            };            
            items := Array.append(items, [obj]);
            return items;
        };
    
        public func update(id: Nat32, title: Text, describe: Text) : async [Types.Contest] {
            switch (Array.find<Types.Contest>(items, func(c) { c.id == id })) {
                case (_item) {
                    let obj = {
                        id = id;
                        title = title; 
                        describe = describe;
                    };
                    if (Array.size(items) > 0) {
                        items := Array.map<Types.Contest, Types.Contest>(items, func(c) {
                            return if (c.id == id) { obj } else { c };
                        });
                    };
                    return items;
                };
            };
        };

    //   public query func getById(id: Text) : async ?Types.Contest {
    //     switch (Array.find<User>(users, func(u) { u.id == id })) {
    //       case (?user) { return ?user; };
    //       case (_) { return null; };
    //     };
    //   };
    };
};