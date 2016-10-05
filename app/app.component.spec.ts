import { AppComponent } from "./app.component";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("test", () => {
  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  }));

  it("should test setup", () => {
    let fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    let element: DebugElement = fixture.debugElement.query(By.css("h1"));
    expect(element.nativeElement.innerText).toEqual("Greater Sum Angular2 Seed");
  });
});