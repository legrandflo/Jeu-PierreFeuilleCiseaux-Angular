import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuPanelComponent } from './jeu-panel.component';

describe('JeuPanelComponent', () => {
  let component: JeuPanelComponent;
  let fixture: ComponentFixture<JeuPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
