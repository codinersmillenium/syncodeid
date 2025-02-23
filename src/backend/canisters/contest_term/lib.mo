import Types "types";
import Array "mo:base/Array";
import Text "mo:base/Text";

module {

    public class ContestTerm(_arg: Text) {

        var items: [Types.ContestTerm] = [];

        public func lists() : [Types.ContestTerm] {
            return items;
        };

        public func create(data : Types.ContestTerm) : async Text {
            let obj: Types.ContestTerm = {
                id = data.id; 
                name = data.name;
                fk_contest = data.fk_contest;
            };
            items := Array.append(items, [obj]);
            return "The term has been registered...";
        };
    
        public func update(data : Types.ContestTerm) : async Text {
            switch (Array.find<Types.ContestTerm>(items, func(c) { c.id == data.id })) {
                case (_item) {
                    let obj = {
                        id = data.id; 
                        name = data.name;
                        fk_contest = data.fk_contest;
                    };
                    if (Array.size(items) > 0) {
                        items := Array.map<Types.ContestTerm, Types.ContestTerm>(items, func(c) {
                            return if (c.id == data.id) { obj } else { c };
                        });
                    };
                    return "The term has been updated...";
                };
            };
        };

    };
};