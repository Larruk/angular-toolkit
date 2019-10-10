import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitShellComponent } from './toolkit-shell.component';

describe('ToolkitShellComponent', () => {
  let component: ToolkitShellComponent;
  let fixture: ComponentFixture<ToolkitShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
