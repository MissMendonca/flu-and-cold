// First testing true for postcode "abcdef" 


describe("Postcode_validator", function(){
    describe("Text tests", function() {
        it("should return true", function(){
            expect(text("abcdef")).toBe(true);
            
        }); 
        it("should return false", function() {
            expect(text("@")).toBe(false);
        });
        it("should return false", function() {
            expect(text(" ")).toBe(false);
        });
        
        it("should return false", function() {
            expect(text(123456)).toBe(false);
        });
        
        it("should return false", function() {
            expect(text("123456")).toBe(false);
        });
        it("should return true", function() {
            expect(text("abc123")).toBe(true);
        });
    });
});