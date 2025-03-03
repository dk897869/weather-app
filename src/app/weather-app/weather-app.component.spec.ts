import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppComponent } from './weather-app.component';

describe('WeatherAppComponent', () => {
    let component: WeatherAppComponent;
    let fixture: ComponentFixture<WeatherAppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WeatherAppComponent]
        });
        fixture = TestBed.createComponent(WeatherAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
